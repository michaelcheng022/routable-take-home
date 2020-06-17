import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const URL = 'https://api.github.com/user/repos'
const List = props => {
  const [repos, setRepos] = useState([])
  useEffect(() => {
   const data = fetch(URL)
    .then(res=> res.json())
    .then(data => data)

    return setRepos(data)
    },[])
  return (
    <div>
      {'hi'}
    </div>
  )
}

List.propTypes = {

}

export default List
