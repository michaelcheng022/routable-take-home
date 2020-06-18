

import { types } from './actions'
const getInitialState = () => ({
  url: '',
  fetching: false,
  fetched: false,
  error: null,
  hits: [],
  issues: [],
  active: null,
  priorityChanged: false
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
        priorityChanged
      }
    default:
      return state;
  }
};



export default app;
