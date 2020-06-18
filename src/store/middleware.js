import { applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// thunk middleware allows async actions for redux
const middlewareList = [thunk];
// redux chrome tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// need middleware for async redux actions
const middleware = composeEnhancers(applyMiddleware(...middlewareList));

export default middleware;
