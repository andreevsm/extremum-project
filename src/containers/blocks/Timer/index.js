import React from 'react';
import './index.scss';

const Timer = ({ className }) => {
  const [currentTime, setCurrentTime] = React.useState('');

  React.useEffect(() => {
    updateClock(setCurrentTime);
    const timerId = setInterval(() => updateClock(setCurrentTime), 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div className={`timer ${className}`}>{currentTime}</div>;
};

export default Timer;

// eslint-disable-next-line arrow-parens
const getTimeRemaining = endTime => {
  const time = Date.parse(endTime) - Date.parse(new Date());
  return {
    seconds: Math.floor((time / 1000) % 60),
    minutes: Math.floor((time / 1000 / 60) % 60),
    hours: Math.floor((time / (1000 * 60 * 60)) % 24),
    days: Math.floor(time / (1000 * 60 * 60 * 24)),
  };
};

// eslint-disable-next-line arrow-parens
const updateClock = setCurrentTime => {
  const timer = new Date(
    Date.parse(new Date('2019-07-08')) + 15 * 24 * 60 * 60 * 1000,
  );
  const time = getTimeRemaining(timer);
  setCurrentTime(
    `${time.days}:${`0${time.hours}`.slice(-2)}:${`0${time.minutes}`.slice(
      -2,
    )}:${`0${time.seconds}`.slice(-2)}`,
  );
};
