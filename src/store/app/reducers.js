

import { types } from './actions'
<<<<<<< HEAD
import { loadState } from '../localStorage'

const persistedState = loadState();
const getInitialState = () => ({
  fetching: false,
  fetched: false,
  error: null,
  hits: persistedState?.hits || [],
  issues: persistedState?.issues || [],
  active: persistedState?.active || null,
=======
const getInitialState = () => ({
  url: '',
  fetching: false,
  fetched: false,
  error: null,
  hits: [],
  active: null,
  issues: []
>>>>>>> ff37e53... config redux store && refactor list components
});

const app = (state = getInitialState(), action) => {
  switch(action.type) {
    case types.ACTIVE_REPO:
      console.log(action)
      return {
        ...state,
<<<<<<< HEAD
<<<<<<< HEAD
        active: action.active,
        issuesUrl: action.issuesUrl
=======
        active: action.active
>>>>>>> ff37e53... config redux store && refactor list components
=======
        active: action.active,
        issuesUrl: action.issuesUrl
>>>>>>> 1c9b691... move to containers && update redux store state
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
<<<<<<< HEAD
          noData: false,
          issues: action.data,
        };
      }
=======
          issues: action.hits,
        };
      }

>>>>>>> ff37e53... config redux store && refactor list components
      return {
        ...state,
        fetching: false,
        fetched: true,
<<<<<<< HEAD
        hits: action.data,
      };
    case types.SET_ISSUE_PRIORITY:
      const {index, newIndex, priorityChanged } = action;
      const issues = [...state.issues]
      let temp = issues[index]
      issues[index] = issues[newIndex]
      issues[newIndex] = temp
      return {
        ...state,
        issues,
      }
=======
        hits: action.hits,
      };
>>>>>>> ff37e53... config redux store && refactor list components
    default:
      return state;
  }
};



export default app;
