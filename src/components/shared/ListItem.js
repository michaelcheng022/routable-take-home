import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { dispatch } from 'rxjs/internal/observable/pairs'

const ListItem = (props) => {
  const { sourceType, item  } = props

  return (
    <div className="list-item" onClick={() => props.onClick(item)}>
      {props.card(item)}
   </div>
  )
}

export default ListItem;
