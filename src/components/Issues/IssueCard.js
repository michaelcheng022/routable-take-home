import React from 'react'
import PropTypes from 'prop-types'
import { fromNow, monthDayYear } from 'utils/formatDate'

const IssueCard = ({ issue, setIssuePriority, index, issuesLen }) => {
  const disabledHigh = index === 0
  const disabledLow  = index === issuesLen - 1
  const lower = index + 1
  const higher = index - 1

  return (
    <div className="issue flex-container">
      <div className="flex-item">
        <button
          disabled={disabledHigh}
          onClick={() => setIssuePriority(index, higher)}
          className={`btn-priority btn-up ${disabledHigh ? 'btn-disabled': ''}`}
        >
          {`▲`}
        </button>
        <button
          disabled={disabledLow}
          onClick={() => setIssuePriority(index, lower)}
          className={`btn-priority btn-down ${disabledLow ? 'btn-disabled': ''}`}
        >
          {`▼`}
        </button>
      </div>
      <div className="flex-item">
        <img className="avatar" src={issue.user.avatar_url}></img>
      </div>
      <div className="flex-item">
        <h4>{issue.title}</h4>
        <div className="flex-text">
          {`Created: ${monthDayYear(new Date(issue.created_at))}`}
        </div>
        <div className="flex-text">
          {`Last Updated: ${fromNow(issue.updated_at)}`}
        </div>
      </div>
    </div>
  )
}

IssueCard.propTypes = {
  issue: PropTypes.object,
  index: PropTypes.number,
  issuesLen: PropTypes.number,
  setIssuePriority: PropTypes.func
}

export default IssueCard
