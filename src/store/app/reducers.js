

import { types } from './actions'
<<<<<<< HEAD
<<<<<<< HEAD
import { loadState } from '../localStorage'

const persistedState = loadState();
<<<<<<< HEAD
const getInitialState = () => ({
  fetching: false,
  fetched: false,
  error: null,
  hits: persistedState?.hits || [],
  issues: persistedState?.issues || [],
  active: persistedState?.active || null,
=======
=======
import { loadState } from '../localStorage'

const persistedState = loadState();
console.log(persistedState)
>>>>>>> a076f22... add data persistence through local storage
=======
>>>>>>> 888f616... merge with develop
const getInitialState = () => ({
  fetching: false,
  fetched: false,
  error: null,
<<<<<<< HEAD
  hits: [],
  issues: [],
  active: null,
<<<<<<< HEAD
  issues: []
>>>>>>> ff37e53... config redux store && refactor list components
=======
  priorityChanged: false
>>>>>>> 403d5bd... add prioritize issues functionality
=======
  hits: persistedState?.hits || [],
  issues: persistedState?.issues || [],
  active: persistedState?.active || null,
>>>>>>> a076f22... add data persistence through local storage
});

const app = (state = getInitialState(), action) => {
  switch(action.type) {
    case types.ACTIVE_REPO:
<<<<<<< HEAD
      console.log(action)
=======
>>>>>>> 888f616... merge with develop
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
<<<<<<< HEAD
    case types.NO_DATA_RECIEVED:
      return {
        ...state,
        noData: true
      }
    case types.RECIEVE_DATA:
      console.log(action)
=======
    case types.RECIEVE_DATA:
>>>>>>> 888f616... merge with develop
      if (action.sourceType === 'issues') {
        return {
          ...state,
          fetching: false,
          fetched: true,
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
          noData: false,
>>>>>>> a076f22... add data persistence through local storage
          issues: action.data,
        };
      }
>>>>>>> 403d5bd... add prioritize issues functionality
      return {
        ...state,
        fetching: false,
        fetched: true,
<<<<<<< HEAD
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
=======
        hits: action.data,
      };
    case types.SET_ISSUE_PRIORITY:
      const {index, newIndex } = action;
      const issues = [...state.issues]
      let temp = issues[index]
      issues[index] = issues[newIndex]
      issues[newIndex] = temp

      return {
        ...state,
        issues,
      }
>>>>>>> 403d5bd... add prioritize issues functionality
    default:
      return state;
  }
};



export default app;
