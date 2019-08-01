import React, { useState, useEffect } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import classnames from 'classnames';
import Countdown from 'react-countdown-now';

import './index.scss';
import { ROUTES } from '../../../constants';

const Timer = ({
  isNicknameAdded,
  isGameTimer = false,
  withRedirect = true,
  history,
  initialTimeDifference,
  repeat = false,
  resetTimer,
  ...rest
}) => {
  const timerClassNames = classnames('timer', {
    game: isGameTimer,
    'timer_is-nickname-added': isNicknameAdded,
  });

  const [timerKey, setTimerKey] = useState(new Date().getTime().toString());

  const [endDate, setEndDate] = useState(
    initialTimeDifference
      ? new Date().getTime() + initialTimeDifference
      : new Date(Date.parse(new Date('2019-07-28T19:50:00.000Z'))),
  );
  const [activeTimer, setActiveTimer] = useState(null);

  useEffect(
    () => () => {
      activeTimer && clearTimeout(activeTimer);
    },
    [],
  );

  useEffect(() => {
    if (initialTimeDifference) {
      setActiveTimer(
        setTimeout(() => {
          setTimerKey(new Date().getTime().toString());
          setEndDate(
            new Date(Date.now() + initialTimeDifference)
              || new Date('2019-07-28T22:00:00'),
          );
          resetTimer && resetTimer();
        }, 1000),
      );
    }
  }, [initialTimeDifference]);

  if (new Date().getTime() >= endDate.getTime() && withRedirect) {
    return <Redirect to={ROUTES.GAME} />;
  }

  return (
    <div className={timerClassNames}>
      <Countdown
        key={timerKey}
        date={endDate}
        onComplete={() => {
          if (withRedirect) {
            history.push(ROUTES.GAME);
          }

          if (repeat) {
            setActiveTimer(
              setTimeout(() => {
                setTimerKey(new Date().getTime().toString());
                setEndDate(
                  new Date(Date.now() + initialTimeDifference)
                    || new Date('2019-07-28T22:00:00'),
                );
              }, 1000),
            );
          }
        }}
        {...rest}
      />
    </div>
  );
};

export default withRouter(Timer);
