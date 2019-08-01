/* eslint-disable max-len */
import React, {
  useCallback, useState, useReducer, useMemo,
} from 'react';
import * as R from 'ramda';
import { handleActions, createAction } from 'redux-actions';
import { withTranslation } from 'react-i18next';
import io from 'socket.io-client';
import { call, take, delay } from 'redux-saga/effects';

import { gameItemFactory } from '../../../utils/gameItemFactory';
import LanguageChanger from '../../blocks/LanguageChanger';
import Timer from '../../blocks/Timer';
import GameItem from '../../../components/GameItem';
import { useSaga } from '../../../effects';
import createSocketChannel from '../../../services/createSocketChannel';
import { compose } from '../../../utils/compose';
import { normilizeTimeValue } from '../../../utils/functions';
import './index.scss';

const initialAction = createAction('init_data');
const globalUpdateAction = createAction('global_update');
const localUpdateAction = createAction('local_update');
const updateTargetClicks = createAction('update_target_clicks');
const allTargetsUpdate = createAction('all_targets_update');
const newUser = createAction('new_user');
const resetTimer = createAction('reset_timer');

const asyncInitialSocket = () => fetch('https://ourway.gg/api/targets/')
  .then(res => res.json())
  .catch(() => {
    throw new Error('Internet');
  });

const gameReducer = handleActions(
  {
    [initialAction]: R.pipe(
      R.nthArg(1),
      R.prop('payload'),
      R.evolve({ targets: targets => targets.map(gameItemFactory) }),
    ),
    [globalUpdateAction]: (
      state,
      { payload: { target_id, target_clicks } },
    ) => ({
      ...state,
      total_clicks: state.total_clicks + 1,
      targets: state.targets
        .map(target => (target.id === target_id
          ? { ...target, clicks: target_clicks }
          : target))
        .map(gameItemFactory),
    }),
    [allTargetsUpdate]: (state, { payload: { targets, timer } }) => ({
      ...state,
      timer,
      targets: targets.map(gameItemFactory),
    }),
    [newUser]: state => ({ ...state, users: state.users + 1 }),
    [updateTargetClicks]: (state, { payload }) => ({
      ...state,
      my_clicks: state.my_clicks + 1,
      targets: state.targets
        .map(target => (target.id === payload ? { ...target } : target))
        .map(gameItemFactory),
    }),
    [resetTimer]: ({ state }) => ({ ...state, timer: 0 }),
  },
  {
    total_clicks: 0,
    my_clicks: 0,
    users: 0,
    targets: [],
  },
);

const Game = ({ t }) => {
  const [socket, setSocket] = useState(null);
  const [maxCounts, setMaxCounts] = useState(0);

  const [state, dispatch] = useReducer(gameReducer, {
    total_clicks: 0,
    my_clicks: 0,
    users: 0,
    openCells: 0,
    targets: [],
    timer: 0,
  });

  const [data, lastItem] = useMemo(() => {
    const { targets } = state;

    setMaxCounts(Math.max(...targets.map(target => target.clicks)));

    const lastItem = R.last(targets);
    const items = R.pipe(
      R.dropLast(1),
      R.splitEvery(3),
    )(targets);

    return [items, lastItem];
  }, [state]);

  const onGameItemClick = useCallback(
    (gameItemId) => {
      if (!socket || !socket.connected) {
        // Handle socket error
        return;
      }

      socket.emit('click', gameItemId, () => {
        dispatch(updateTargetClicks(gameItemId));
      });
    },
    [socket],
  );

  useSaga(function* saga() {
    const socket = yield call(
      [io, io.connect],
      'https://ourway.gg/api/clicker/',
    );

    yield call(setSocket, socket);
    yield call([socket, socket.open]);
    yield call([socket, socket.emit], 'init', '');

    let error = true;

    while (error) {
      try {
        const initialData = yield call(asyncInitialSocket, socket);
        dispatch(initialAction(initialData));
        error = false;
      } catch (ex) {
        yield delay(3000);
      }
    }

    const socketChannel = yield call(createSocketChannel, socket, [
      initialAction.toString(),
      globalUpdateAction.toString(),
      localUpdateAction.toString(),
      allTargetsUpdate.toString(),
      newUser.toString(),
    ]);

    while (true) {
      const action = yield take(socketChannel);
      dispatch(action);
    }
  }, []);

  return (
    <div className="game-page">
      <div className="game-page__game-items">
        {data.map((items, i) => (
          <div key={i.toString()} className="game-page__row">
            {items.map(({ img, id, ...rest }) => (
              <GameItem
                {...rest}
                id={id}
                onClick={onGameItemClick}
                src={img}
                key={id}
                maxCounts={maxCounts}
                resetTimer={() => {
                  dispatch(resetTimer());
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="description">
        <div className="description__main">
          <div className="description__language-changer">
            <LanguageChanger isWhiteBackground />
          </div>
          <Timer
            withRedirect={false}
            initialTimeDifference={state.timer}
            renderer={({ seconds, minutes }) => (
              <div>
                {`${normilizeTimeValue(minutes)}:${normilizeTimeValue(
                  seconds,
                )}`}
              </div>
            )}
            repeat
            isGameTimer
          />
          <div className="description__info-title">{t('Manual')}</div>
          <div className="description__info-description">
            {t('Game description')}
          </div>
          <div style={{ marginTop: 18 }}>{t('Friends teamup')}</div>
          <div className="description__container">
            <div className="description__inner">
              <div className="description__title">{t('Participants')}</div>
              <div className="description__value">{state.users}</div>
            </div>
            <div className="description__inner">
              <div className="description__title">{t('Cells open')}</div>
              <div className="description__value">
                {state.targets.filter(target => target.is_open).length}
              </div>
            </div>
          </div>
          <div className="description__container">
            <div className="description__inner">
              <div className="description__title">{t('Total clicks')}</div>
              <div className="description__value">{state.total_clicks}</div>
            </div>
            <div className="description__inner">
              <div className="description__title">{t('Your clicks')}</div>
              <div className="description__value">{state.my_clicks}</div>
            </div>
          </div>
          <div className="description__container">
            <div className="description__inner">
              <div className="description__title description__title_forgotten">
                {t('Almost forgot')}
              </div>
              <div className="description__value description__value_forgotten">
                0J/QvtC30LTRgNCw0LLQu9GP0LXQvCwg0YLRiyDRgNCw0LfQs9Cw0LTQsNC7LiDQrdGC0L4g0L3QuNGH0LXQs9C+INC90LUg0LTQsNC10YIsINC90L4g0YLRiyDRg9C80L3QuNGG0LAu
              </div>
            </div>
          </div>
        </div>
        {lastItem && (
          <GameItem
            onClick={onGameItemClick}
            src={lastItem.img}
            {...lastItem}
            isLastItem
            maxCounts={maxCounts}
          />
        )}
      </div>
    </div>
  );
};

export default compose(withTranslation())(Game);
