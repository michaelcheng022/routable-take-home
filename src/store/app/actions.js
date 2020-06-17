
// action types
export const types = {
  ACTIVE_REPO: 'ACTIVE_REPO',
  FETCH_DATA_START: 'FETCH_DATA_START',
  FETCH_FROM: 'FETCH_FROM',
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
<<<<<<< HEAD
  RECIEVE_DATA: 'RECIEVE_DATA',
  SET_ISSUE_PRIORITY: 'SET_ISSUE_PRIORITY'
=======
  RECIEVE_DATA: 'RECIEVE_DATA'
>>>>>>> ff37e53... config redux store && refactor list components
}

// action creators
export const creators = {
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
    sourceType
  })
}

// fetch data and dispatch depending on source (issues || repos)
export const fetchData = (url, srcType) => {
  return dispatch => {
    dispatch(creators.fetchDataStart())
    dispatch(creators.fetchFrom(url))
    return fetch(url, {
      method: "GET",
      headers: new Headers({
        Accept: 'application/vnd.github.nebula-preview+json'
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(srcType)
        return dispatch(creators.recieveData(data, srcType))
      })
      .catch((err) => {
        dispatch(creators.fetchDataError(err))
      })
  };
}
>>>>>>> ff37e53... config redux store && refactor list components

export const fetchActive = (active, url, srcType) => {
  return dispatch => {
    console.log('hello')
    console.log(active, url, srcType)
    dispatch(creators.setActiveRepo(active))

    return dispatch(fetchData(url, srcType))

  }
}


