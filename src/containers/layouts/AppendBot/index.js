import React from 'react';
import Timer from '../Timer';
import './index.scss';

const AppendBot = () => (
  <div className="append-bot-container">
    <Timer />
    <div className="append-bot-button-text">НАЖМИ СЮДА</div>
    <div className="append-bot-description">
      ДОБАВЬ НАШЕГО БОТА, ЧТОБЫ ПРОЙТИ ДАЛЬШЕ И ДОБРАТЬСЯ ДО СЕКРЕТНОГО УРОВНЯ.
    </div>
  </div>
);

export default AppendBot;
