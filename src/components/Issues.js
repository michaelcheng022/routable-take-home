
import React, { useState, useEffect} from 'react'
import { bindActionCreators } from 'redux'
import List from './shared/List'
import IssueCard from './IssueCard'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchData, creators, fetchActive } from 'store/app/actions';

const Issues = (props) => {
  return (
    <div>
     {!!props.active ?
      <List
        active={props.active}
        fetchData={props.fetchData}
        setActiveRepo={props.setActiveRepo}
        issuesUrl={props.issuesUrl}
        sourceType="issues"
        card={(issue) => {
          console.log(issue)
          return(<IssueCard issue={issue} />)
      }}
    /> : null }
    </div>

  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchData, fetchActive }, dispatch)
}

const mapStateToProps = state => {
  return {
    url: state.app.url,
    hits: state.app.hits,
    active: state.app.active,
    issues: state.app.issues,
    issuesUrl: state.app.issuesUrl
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Issues);
