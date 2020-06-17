import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD

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
=======
import { dispatch } from 'rxjs/internal/observable/pairs'

const ListItem = (props) => {
  console.log(props)
  const { item } = props

  const onClick = () => {
    props.setActive(item)
  }
  return (
    <div className="repos" onClick={() => onClick}>
      {item.name}
>>>>>>> ff37e53... config redux store && refactor list components
   </div>
  )
}

export default ListItem;
