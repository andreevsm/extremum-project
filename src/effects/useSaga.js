import { useEffect } from 'react';
import { sagaMiddleware } from '../modules/configureStore';

const useSaga = (saga, inputs) => {
  useEffect(() => {
    const task = sagaMiddleware.run(saga);

    return () => {
      task.cancel();
    };
  }, inputs);
};

export default useSaga;
