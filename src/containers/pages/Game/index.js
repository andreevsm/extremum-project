import React from 'react';
import * as R from 'ramda';
import * as gameItems from '../../../assets/images/game';
import Timer from '../../blocks/Timer';
import './index.scss';

const renderData = R.pipe(
  R.values,
  R.converge((data, lastItem) => [data, lastItem], [
    R.pipe(
      R.dropLast(1),
      R.splitEvery(3),
    ),
    R.last,
  ]),
)(gameItems);

const Game = () => {
  const [data, lastItem] = renderData;
  return (
    <div className="game-container">
      <div className="data-container">
        {data.map((items, i) => (
          <div className="elememt-row">
            {items.map((src, j) => (
              <div key={i.toString() + j.toString()} className="elememt">
                <img src={src} className="image-empty" alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="description-container">
        <div className="description-block">
          <Timer className="game-timer" />
          <div className="info-title">Инструкция</div>
          <div className="info-description">
            КОГДА ТАЙМЕР ИСТЕЧЕТ, ОТКРОЕТСЯ ЯЧЕЙКА У КОТОРОЙ БОЛЬШЕ ВСЕГО
            КЛИКОВ. КАЖДЫЙ ТВОЙ КЛИК – ПОМОГАЕТ ТВОЕЙ КОМАНДЕ ВЫИГРАТЬ.
            <div style={{ marginTop: 18 }}>
              КООПЕРИРУЙСЯ С ДРУЗЬЯМИ, ОТКРЫВАЙ СВОЮ ЯЧЕЙКУ.
            </div>
          </div>
          <div className="entities-container">
            <div className="entity-block">
              <div className="entity-title">УЧАСТНИКИ</div>
              <div className="entity-val">5054</div>
            </div>
            <div className="entity-block">
              <div className="entity-title">ЯЧЕЕК ОТКРЫТО</div>
              <div className="entity-val">5054</div>
            </div>
          </div>
          <div className="entities-container">
            <div className="entity-block">
              <div className="entity-title">ВСЕГО КЛИКОВ</div>
              <div className="entity-val">5054</div>
            </div>
            <div className="entity-block">
              <div className="entity-title">ИЗ НИХ ВАШИ</div>
              <div className="entity-val">5054</div>
            </div>
          </div>
          <div className="footer-text">
            ПРИГЛАСИ ДРУГА, ЧТОБЫ ОТКРЫТЬ ЗАВЕТНУЮ ЯЧЕЙКУ КАК МОЖНО СКОРЕЕ.
          </div>
        </div>
        <div className="last-element">
          <img src={lastItem} className="image-empty last-image-empty" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Game;
