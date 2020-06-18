import React from 'react'

const ListItem = ({ active, card, item, itemsLen, index, onClick, sourceType }) => {
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
