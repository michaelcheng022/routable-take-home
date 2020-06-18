import { createStore } from 'redux';
import rootReducer from './reducer';
import middleware from './middleware';

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, middleware);
  return store;
};

export default configureStore;
