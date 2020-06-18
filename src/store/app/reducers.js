

import { types } from './actions'
import { loadState } from '../localStorage'

const persistedState = loadState();
<<<<<<< HEAD
=======
console.log(persistedState)
>>>>>>> origin/develop
const getInitialState = () => ({
  fetching: false,
  fetched: false,
  error: null,
  hits: persistedState?.hits || [],
  issues: persistedState?.issues || [],
  active: persistedState?.active || null,
});

const app = (state = getInitialState(), action) => {
  switch(action.type) {
    case types.ACTIVE_REPO:
<<<<<<< HEAD
=======
      console.log(action)
>>>>>>> origin/develop
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
<<<<<<< HEAD
    case types.RECIEVE_DATA:
=======
    case types.NO_DATA_RECIEVED:
      return {
        ...state,
        noData: true
      }
    case types.RECIEVE_DATA:
      console.log(action)
>>>>>>> origin/develop
      if (action.sourceType === 'issues') {
        return {
          ...state,
          fetching: false,
          fetched: true,
          noData: false,
          issues: action.data,
        };
      }
      return {
        ...state,
        fetching: false,
        fetched: true,
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
    default:
      return state;
  }
};



export default app;
