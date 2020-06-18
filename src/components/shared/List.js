import React, { useState, useEffect} from 'react'
import Loader from './Loader'
import ListItem from './ListItem'
import PropTypes from 'prop-types'


const List = props => {

  const { sourceType, items, card, noData } = props
  const [active, setActive] = useState(props.active)

  const handleClick = (item) => {
    setActive(item)
    if (sourceType === 'repos') {
      props.setActiveRepo(item)
    }
  }

  // const loader = () => {
  //   setTimeout(() => {

  //   })
  // }
  return (
    <div className={ sourceType === 'repos' ? 'repos-list' : 'issues-list'}>
      {items?.length > 0 ? items.map((item, index) => {

        return (
          <ListItem
            active={active.id === item.id}
            card={card}
            key={item.id}
            onClick={handleClick}
            item={item}
            index={index}
            itemsLen={items.length}
            sourceType={sourceType}
          />
        )
        }) : <div className="loader-container"><Loader /></div>}
    </div>
  )
}

List.propTypes = {
  sourceType: PropTypes.string,
}

export default List

