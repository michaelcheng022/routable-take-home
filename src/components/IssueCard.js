import React from 'react'
import PropTypes from 'prop-types'
import { fromNow, monthDayYear } from 'utils/formatDate'

const IssueCard = ({ issue, setIssuePriority, index, issuesLen }) => {
  const lower = index + 1
  const higher = index - 1
  return (
    <div className="issue flex-container">
      <div className="flex-item">
        <button
          disabled={index === 0}
          onClick={() => setIssuePriority(index, higher)}
        >
          {`▲`}
        </button>
        <button
          disabled={index === issuesLen - 1}
          onClick={() => setIssuePriority(index, lower)}
        >
          {`▼`}
        </button>
      </div>
      <div className="flex-item">
        <img className="avatar" src={issue.user.avatar_url}></img>
      </div>
      <div className="flex-item">
        <h4>{issue.title}</h4>
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
