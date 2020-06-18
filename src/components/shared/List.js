import React, { useState, useEffect} from 'react'
import Loader from './Loader'
import ListItem from './ListItem'
import PropTypes from 'prop-types'


const URL = `https://api.github.com/user/repos`
const TEST_URL = 'https://api.github.com/repositories?since=364'

const List = props => {

  const { sourceType, issuesUrl } = props
  const [items, setItems] = useState(props.items || [])
  const [active, setActive] = useState(props.active)

  useEffect(() => {
    console.log(props)

    async function fetchItems(url = TEST_URL) {
        const data = await props.fetchData(url, sourceType)
        setItems(data.hits)
    }

    if (!!props.active) {
      fetchItems(issuesUrl)
    }
    else if (sourceType === 'repos') {
      fetchItems()
    }

  },[issuesUrl])

  const handleClick = (item) => {
    setActive(item)
    if (sourceType === 'repos') {
      props.setActiveRepo(item)
    }

  }

  return (
    <div className={ sourceType === 'repos' ? 'repos-list' : 'issues-list'}>
      {items.length > 0 ? items.map((item) => {

      return (
        <ListItem
          card={props.card}
          key={item.id}
          onClick={handleClick}
          item={item}
          sourceType={props.sourceType}
        />
      )
      }) : <Loader />}
    </div>
  )
}

List.propTypes = {
  sourceType: PropTypes.string,
}

export default List

