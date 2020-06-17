// action types
export const types = {
  ACTIVE_REPO: 'ACTIVE_REPO',
  FETCH_DATA_START: 'FETCH_DATA_START',
  FETCH_FROM: 'FETCH_FROM',
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
  RECIEVE_DATA: 'RECIEVE_DATA'
}

// action creators
export const creators = {
  setActiveRepo: (active) => ({
    type: types.ACTIVE_REPO,
    active
  }),
  fetchFrom: (url) => ({
    type: types.FETCH_FROM,
    url
  }),
  fetchDataStart: () => ({
    type: types.FETCH_DATA_START
  }),
  fetchDataError: error => ({
    type: types.FETCH_DATA_ERROR,
    error: error.message
  }),
  recieveData: (data, sourceType) => ({
    type: types.RECIEVE_DATA,
    hits: data,
    sourceType
  })
}

// fetch data and dispatch depending on source (issues || repos)
export const fetchData = (url, type) => {
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
        return dispatch(creators.recieveData(data, type))
      })
      .catch((err) => {
        dispatch(creators.fetchDataError(err))
      })
  };
}


