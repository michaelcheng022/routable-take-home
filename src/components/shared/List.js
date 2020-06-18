import React, { useState, propTypes} from 'react'
import Loader from './Loader'
import ListItem from './ListItem'
import PropTypes from 'prop-types'

const List = (props) => {
  const [active, setActive] = useState(props.active)
  const {
    card,
    fetching,
    items,
    sourceType,
    setActiveRepo
  } = props

  const handleClick = (item) => {
    setActive(item)
    if (sourceType === 'repos') {
      setActiveRepo(item)
    }
  }

  const emptyDataMsg = sourceType === 'repos'
    ? 'No repositories fetched.'
    : `There aren't any open issues.`
  const showLoader = fetching
    ? <div className="loader-container"><Loader /></div>
    : <div><h3>{emptyDataMsg}</h3></div>

  return (
    <div className={ sourceType === 'repos' ? 'repos-list' : 'issues-list'}>
      {items?.length > 0 ? items.map((item, index) => {
        return (
          <ListItem
            active={active?.id === item?.id}
            card={card}
            key={item.id}
            onClick={handleClick}
            item={item}
            index={index}
            itemsLen={items.length}
            sourceType={sourceType}
          />
        )
        }) : showLoader}
    </div>
  )
}

List.propTypes = {
  active: PropTypes.object,
  fetching: PropTypes.bool,
  items: PropTypes.object,
  sourceType: PropTypes.string,
  setActiveRepo: PropTypes.func
}

export default List

