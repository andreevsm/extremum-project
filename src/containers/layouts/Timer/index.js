import React from 'react';
import './index.scss';

const Timer = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="timer">{currentTime.toLocaleTimeString()}</div>;
};

export default Timer;
