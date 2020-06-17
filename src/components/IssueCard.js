import React from 'react'
import PropTypes from 'prop-types'
import { fromNow, monthDayYear } from 'utils/utils'

const IssueCard = ({ issue }) => {
  return (
    <div className="issue flex-container">
      <div className="flex-item">
        <img className="avatar" src={issue.user.avatar_url}></img>
      </div>
      <div className="flex-item">
        <h3>{issue.title}</h3>
        <div>{`Created: ${monthDayYear(new Date(issue.created_at))}`}</div>
        <div>{`Last Updated: ${fromNow(issue.updated_at)}`}</div>
      </div>

    </div>
  )
}

IssueCard.propTypes = {
  issue: PropTypes.object
}

export default IssueCard
