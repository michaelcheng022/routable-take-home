import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'


const URL = `https://api.github.com/user/michaelcheng022/repos`
const TEST_URL = 'https://api.github.com/repositories?since=364'

const styles = {
  listItem: {
    display: 'flex',
    margin: 2
  }
}

const ListItem = ({ item }) => {
  return (
    <div styles={styles.listItem}>
      {item.name}
   </div>
  )
}

const List = props => {
  const [repos, setRepos] = useState([])
  const [active, setActive] = useState({})
  useEffect(() => {
   fetch(TEST_URL, {
     method: "GET",
     headers: new Headers({
       Accept: 'application/vnd.github.nebula-preview+json'
     })
   })
    .then(res=> res.json())
    .then(data => setRepos(data))
    .catch(err => console.log(err))

    },[])
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      {repos?.length && repos.map((repo, i) => {
        console.log(repo)
      return (
        <ListItem item={repo} />
      )
      })}
    </div>
  )
}

List.propTypes = {

}

export default List
