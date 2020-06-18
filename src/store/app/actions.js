// action types
export const types = {
  ACTIVE_REPO: 'ACTIVE_REPO',
  FETCH_DATA_START: 'FETCH_DATA_START',
  FETCH_FROM: 'FETCH_FROM',
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
  RECIEVE_DATA: 'RECIEVE_DATA',
<<<<<<< HEAD
=======
  NO_DATA_RECIEVED: 'NO_DATA_RECEIVED',
>>>>>>> origin/develop
  SET_ISSUE_PRIORITY: 'SET_ISSUE_PRIORITY'
}

// action creators
export const creators = {
<<<<<<< HEAD
=======
  // fetchFrom: (url) => ({
  //   type: types.FETCH_FROM,
  //   url
  // }),
>>>>>>> origin/develop
  fetchDataStart: () => ({
    type: types.FETCH_DATA_START
  }),
  fetchDataError: error => ({
    type: types.FETCH_DATA_ERROR,
    error: error.message
  }),
  recieveData: (data, sourceType) => ({
    type: types.RECIEVE_DATA,
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

<<<<<<< HEAD
// create separate actions for issues and repos
=======
>>>>>>> origin/develop
export const getIssues = (url) => async dispatch => {
  dispatch(creators.fetchDataStart())
  try {
    const issues = await fetchData(url)
<<<<<<< HEAD
    dispatch(creators.recieveData(issues, "issues"))
=======
    if(issues.length === 0) {
      console.log('issues empty')
    } else {
      dispatch(creators.recieveData(issues, "issues"))
    }
>>>>>>> origin/develop
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


