
import React, { useState, useEffect} from 'react'
import { bindActionCreators } from 'redux'
import List from './shared/List'
import Header from './shared/Header'
import RepoCard from './RepoCard'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchData, creators } from 'store/app/actions';

const Repos = (props) => {
  return (
    <div className="list-container">
      <Header>{"Repositories"}</Header>
      <List
        active={props.active}
        fetchData={props.fetchData}
        setActiveRepo={props.setActiveRepo}
        sourceType="repos"
        card={(repo) => <RepoCard repo={repo} />}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchData, setActiveRepo: creators.setActiveRepo }, dispatch)
}

const mapStateToProps = state => {
  return {
    url: state.app.url,
    hits: state.app.hits,
    active: state.app.active,
    issues: state.app.issues
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Repos);
