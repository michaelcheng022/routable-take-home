import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { dispatch } from 'rxjs/internal/observable/pairs'

const ListItem = (props) => {
  const { sourceType, item, setActive  } = props
  // console.log(sourceType)
  const fromIssues = sourceType !== 'repos'
  const onClick = () => {
   return props.onClick(item)
  }
  return (
    <div className="repos" onClick={onClick}>
      {fromIssues ? item.title : item.name}
   </div>
  )
}

export default ListItem;
