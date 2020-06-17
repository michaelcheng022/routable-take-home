import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import './index.css';
import App from './app/App';
import configureStore from './store/index';
>>>>>>> ff37e53... config redux store && refactor list components
=======
>>>>>>> a076f22... add data persistence through local storage
import { Provider } from 'react-redux';
import App from './app/App';
import configureStore from 'store/index';
import { throttle } from 'utils/throttle'
import { saveState } from 'store/localStorage'
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = configureStore()

store.subscribe(throttle(() => {
  saveState({
    active: store.getState().app.active,
    issues: store.getState().app.issues,
    hits: store.getState().app.hits
  });
}, 1000)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
