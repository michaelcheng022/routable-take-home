// action types
export const types = {
  ACTIVE_REPO: 'ACTIVE_REPO',
  FETCH_DATA_START: 'FETCH_DATA_START',
  FETCH_FROM: 'FETCH_FROM',
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  RECIEVE_DATA: 'RECIEVE_DATA',
  NO_DATA_RECIEVED: 'NO_DATA_RECEIVED',
=======
  RECIEVE_DATA: 'RECIEVE_DATA',
>>>>>>> 888f616... merge with develop
  SET_ISSUE_PRIORITY: 'SET_ISSUE_PRIORITY'
=======
  RECIEVE_DATA: 'RECIEVE_DATA'
>>>>>>> ff37e53... config redux store && refactor list components
=======
  RECIEVE_DATA: 'RECIEVE_DATA',
  SET_ISSUE_PRIORITY: 'SET_ISSUE_PRIORITY'
>>>>>>> 403d5bd... add prioritize issues functionality
}

// action creators
export const creators = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  setActiveRepo: (active) => ({
    type: types.ACTIVE_REPO,
    active,
    issuesUrl: active?.url ? `${active.url}/issues` : ''
  }),
  fetchFrom: (url) => ({
    type: types.FETCH_FROM,
    url
  }),
>>>>>>> ff37e53... config redux store && refactor list components
=======
  // fetchFrom: (url) => ({
  //   type: types.FETCH_FROM,
  //   url
  // }),
>>>>>>> 403d5bd... add prioritize issues functionality
=======
>>>>>>> 888f616... merge with develop
  fetchDataStart: () => ({
    type: types.FETCH_DATA_START
  }),
  fetchDataError: error => ({
    type: types.FETCH_DATA_ERROR,
    error: error.message
  }),
  recieveData: (data, sourceType) => ({
    type: types.RECIEVE_DATA,
<<<<<<< HEAD
<<<<<<< HEAD
    data,
    sourceType
  }),
  setActiveRepo: (active) => ({
    type: types.ACTIVE_REPO,
    active,
    issuesUrl: active?.url ? `${active.url}/issues` : ''
  }),
  setIssuePriority: (index, newIndex) => ({
    type: types.SET_ISSUE_PRIORITY,
    index,
    newIndex,
    priorityChanged: true
  })
}

// create separate actions for issues and repos
export const getIssues = (url) => async dispatch => {
  dispatch(creators.fetchDataStart())
  try {
    const issues = await fetchData(url)
    dispatch(creators.recieveData(issues, "issues"))
<<<<<<< HEAD
  } catch(err) {
    dispatch(creators.fetchDataError(err))
    throw err
  }
}

export const getRepos = (url) => async dispatch => {
  dispatch(creators.fetchDataStart())
  try {
    const repos = await fetchData(url)
    dispatch(creators.recieveData(repos))
  } catch(err) {
    dispatch(creators.fetchDataError(err))
    throw err
  }
}

// fetch data helper
const fetchData = async (url) => {
  return await fetch(url, {
    method: "GET",
    headers: new Headers({
      Accept: 'application/vnd.github.nebula-preview+json'
    })
  })
    .then(response => response.json())
    .then(data => data)
    .catch((err) => {
      console.log(err)
    })
};
=======
    hits: data,
=======
    data,
>>>>>>> 403d5bd... add prioritize issues functionality
    sourceType
  }),
  setActiveRepo: (active) => ({
    type: types.ACTIVE_REPO,
    active,
    issuesUrl: active?.url ? `${active.url}/issues` : ''
  }),
  setIssuePriority: (index, newIndex) => ({
    type: types.SET_ISSUE_PRIORITY,
    index,
    newIndex,
    priorityChanged: true
  })
}

export const getIssues = (url) => async dispatch => {
  dispatch(creators.fetchDataStart())
  try {
    const issues = await fetchData(url)
    if(issues.length === 0) {
      console.log('issues empty')
    } else {
      dispatch(creators.recieveData(issues, "issues"))
    }
=======
>>>>>>> 888f616... merge with develop
  } catch(err) {
    dispatch(creators.fetchDataError(err))
    throw err
  }
}
>>>>>>> ff37e53... config redux store && refactor list components

export const getRepos = (url) => async dispatch => {
  dispatch(creators.fetchDataStart())
  try {
    const repos = await fetchData(url)
    dispatch(creators.recieveData(repos))
  } catch(err) {
    dispatch(creators.fetchDataError(err))
    throw err
  }
}

// fetch data helper
const fetchData = async (url) => {
  return await fetch(url, {
    method: "GET",
    headers: new Headers({
      Accept: 'application/vnd.github.nebula-preview+json'
    })
  })
    .then(response => response.json())
    .then(data => data)
    .catch((err) => {
      console.log(err)
    })
};


