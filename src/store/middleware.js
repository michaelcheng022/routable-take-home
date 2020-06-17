import { applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const middlewareList = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(...middlewareList));

export default middleware;
