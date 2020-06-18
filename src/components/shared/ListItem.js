import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ active, card, item, itemsLen, index, onClick, sourceType }) => {
<<<<<<< HEAD
=======
  if (sourceType === 'issues') {
    console.log('ISSUE: ', item)
  }
>>>>>>> origin/develop
  const classes = `
    ${sourceType === 'issues' ? 'issues-list-item' : 'list-item '}
    ${active && sourceType !== "issues" ? 'active' : ''}
  `
  return (
    <div
      className={classes}
      onClick={() => onClick(item)}
    >
      {card(item, index, itemsLen)}
   </div>
  )
}

export default ListItem;
