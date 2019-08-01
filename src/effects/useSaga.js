import React from 'react';
import { sagaMiddleware } from '../modules/configureStore';

const useSaga = (saga, inputs) => {
  React.useEffect(() => {
    const task = sagaMiddleware.run(saga);

    return () => {
      task.cancel();
    };
  }, inputs);
};

export default useSaga;
