

import { types } from './actions'
const getInitialState = () => ({
  url: '',
  fetching: false,
  fetched: false,
  error: null,
  hits: [],
  active: null,
  issues: []
});

const app = (state = getInitialState(), action) => {
  switch(action.type) {
    case types.ACTIVE_REPO:
      console.log(action)
      return {
        ...state,
        active: action.active,
        issuesUrl: action.issuesUrl
      }
    case types.FETCH_DATA_START:
      return {
        ...state,
        fetching: true
      };
    case types.FETCH_FROM:
      return {
        ...state,
        url: action.url
      }
    case types.FETCH_DATA_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    case types.RECIEVE_DATA:
      console.log(action)
      if (action.sourceType === 'issues') {
        return {
          ...state,
          fetching: false,
          fetched: true,
          issues: action.hits,
        };
      }

      return {
        ...state,
        fetching: false,
        fetched: true,
        hits: action.hits,
      };
    default:
      return state;
  }
};



export default app;
