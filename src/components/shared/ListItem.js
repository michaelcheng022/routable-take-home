import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { dispatch } from 'rxjs/internal/observable/pairs'

const ListItem = (props) => {
  const { sourceType, item  } = props
  const fromIssues = sourceType !== 'repos'

  return (
    <div className="repos" onClick={() => props.onClick(item)}>
      {fromIssues ? props.card(item): item.name}
   </div>
  )
}

export default ListItem;
