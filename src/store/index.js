import { createStore } from 'redux';
import rootReducer from './reducer';
import middleware from './middleware';

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, middleware);
<<<<<<< HEAD
=======

>>>>>>> ff37e53... config redux store && refactor list components
  return store;
};

export default configureStore;
