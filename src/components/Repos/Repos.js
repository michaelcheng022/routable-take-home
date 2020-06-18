
import React, { useState, useEffect} from 'react'
import { bindActionCreators } from 'redux'
import List from '../shared/List'
import Header from '../shared/Header'
import Icon from '../shared/Icon'
import RepoCard from './RepoCard'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getRepos, creators } from 'store/app/actions';
import logo from 'assets/GitHub-Mark-Light-64px.png'

const URL = `https://api.github.com/michaelcheng022/repos`
// test with endpoint that has repos that contains issues
const TEST_URL = 'https://api.github.com/repositories?since=364'

const Repos = (props) => {
  useEffect(() => {
    async function fetchRepos(url = TEST_URL) {
      await props.getRepos(url)
    }

    if (!props.hits?.length) {
      fetchRepos(TEST_URL, 'repos')
    }
  },[])
  return (
    <div className="list-container">
      <Header icon={<Icon src={logo} alt="Octokat"/>}>
        {"Repositories"}
      </Header>
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

Repos.propTypes = {
  active: PropTypes.object,
  fetching: PropTypes.bool,
  hits: PropTypes.array,
  getRepos: PropTypes.func,
  setActiveRepo: PropTypes.func
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
    active: state.app.active,
    fetching: state.app.fetching,
    hits: state.app.hits
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
