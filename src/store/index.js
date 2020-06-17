import { createStore } from 'redux';
import rootReducer from './reducer';
import middleware from './middleware';

// create redux store
const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, middleware);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ff37e53... config redux store && refactor list components
=======
>>>>>>> a076f22... add data persistence through local storage
  return store;
};

export default configureStore;
