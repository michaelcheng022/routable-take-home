import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
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
   </div>
  )
}

export default ListItem;
