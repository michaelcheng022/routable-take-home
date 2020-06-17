
import React, { useState, useEffect} from 'react'
import { bindActionCreators } from 'redux'
import List from './shared/List'
import Header from './shared/Header'
import RepoCard from './RepoCard'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getRepos, creators } from 'store/app/actions';

const URL = `https://api.github.com/user/repos`
const TEST_URL = 'https://api.github.com/repositories?since=364'

const Repos = (props) => {
  useEffect(() => {
    async function fetchRepos(url = TEST_URL) {
      await props.getRepos(url)

    }
    fetchRepos(TEST_URL, 'repos')

  },[])
  return (
    <div className="list-container">
      <Header>{"Repositories"}</Header>
      <List
        active={props.active}
        fetchData={props.fetchData}
        setActiveRepo={props.setActiveRepo}
        sourceType="repos"
        items={props.hits}
        card={(repo) => <RepoCard repo={repo} />}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getRepos,
      setActiveRepo: creators.setActiveRepo
    }, dispatch)
}

const mapStateToProps = state => {
  return {
    url: state.app.url,
    hits: state.app.hits,
    active: state.app.active,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
