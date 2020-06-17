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
  const { sourceType, item  } = props

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="repos" onClick={() => onClick}>
      {item.name}
>>>>>>> ff37e53... config redux store && refactor list components
=======
    <div className="repos" onClick={onClick}>
      {fromIssues ? item.title : item.name}
>>>>>>> 1c9b691... move to containers && update redux store state
=======
    <div className="repos" onClick={() => props.onClick(item)}>
      {fromIssues ? props.card(item): item.name}
>>>>>>> 2c4dbb3... add styles to issue card
=======
    <div className="list-item" onClick={() => props.onClick(item)}>
      {props.card(item)}
>>>>>>> 7e9c1a9... configure styles for components
   </div>
  )
}

export default ListItem;
