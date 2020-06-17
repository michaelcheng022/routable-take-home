
import React, { useState, useEffect} from 'react'
import { bindActionCreators } from 'redux'
import List from './shared/List'
import Header from './shared/Header'
import Loader from './shared/Loader'
import IssueCard from './IssueCard'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchData, fetchActive } from 'store/app/actions';

const Issues = (props) => {
  console.log(props)
  return (
    <>
     {!!props.active ?
      <div className="list-container">
        <Header>{"Issues"}</Header>
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
        />
      </div>
    : null }
    </>
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
