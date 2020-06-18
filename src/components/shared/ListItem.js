import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ sourceType, item, itemsLen, index, card, onClick }) => {
  if (sourceType === 'issues') {
    console.log('ISSUE: ', item)
  }
  return (
    <div
      className={sourceType === 'issues' ? 'issues-list-item' : 'list-item'}
      onClick={() => onClick(item)}
    >
      {card(item, index, itemsLen)}
   </div>
  )
}

export default ListItem;
