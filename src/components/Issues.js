
import React, { useState, useEffect} from 'react'
import { bindActionCreators } from 'redux'
import List from './shared/List'
import Header from './shared/Header'
import Loader from './shared/Loader'
import IssueCard from './IssueCard'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getIssues, creators } from 'store/app/actions'

const URL = `https://api.github.com/user/repos`

const Issues = (props) => {
  console.log(props)
  const { issuesUrl } = props
  console.log(issuesUrl)
  useEffect(() => {
    async function fetchIssues(url) {
       await props.getIssues(url)
    }
    if (issuesUrl) {
     fetchIssues(issuesUrl)
    }

  },[issuesUrl])
  return (
    <>
     {!!props.active ?
      <div className="list-container">
        <Header>{"Issues"}</Header>
        <List
          active={props.active}
          fetchData={props.fetchData}
          noData={props.noData}
          items={props.issues}
          priorityChanged={props.priorityChanged}
          sourceType="issues"
          card={(issue, index, issuesLen) => {
            console.log(issue)
            return(
              <IssueCard
                setIssuePriority={props.setIssuePriority}
                issue={issue}
                index={index}
                issuesLen={issuesLen}
              />
            )
          }}
        />
      </div>
    : null }
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getIssues,
      setIssuePriority: creators.setIssuePriority
    }, dispatch)
}

const mapStateToProps = state => {
  return {
    active: state.app.active,
    issues: state.app.issues,
    issuesUrl: state.app.issuesUrl,
    noData: state.app.noData
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Issues);
