import React from 'react'
import PropTypes from 'prop-types'

const RepoCard = ({ repo }) => {
  return (
    <div className="repo flex-container">
      <div className="flex-item">
        <h3>{repo.name}</h3>
      </div>
    </div>
  )
}

RepoCard.propTypes = {
  repo: PropTypes.object
}

export default RepoCard
