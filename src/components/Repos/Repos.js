
import React, { useState, useEffect} from 'react'
import { bindActionCreators } from 'redux'
import List from '../shared/List'
import Header from '../shared/Header'
import Icon from '../shared/Icon'
import RepoCard from './RepoCard'
import Form from '../Form/Form'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getRepos, creators } from 'store/app/actions';
import logo from 'assets/GitHub-Mark-Light-64px.png'

const URL = `https://api.github.com/user/repos`
// test URL  that has repos that contains issues
const TEST_URL = 'https://api.github.com/repositories?since=364'

const Repos = (props) => {
  const [token, setToken] = useState('')


  const onSubmit = async (e) => {
    e.preventDefault()
    // normally I would make sure token that is stored is hashed before i do
    localStorage.setItem('token', token)

    async function fetchRepos(url = TEST_URL) {
      await props.getRepos(url, token)
    }

    if (!props.hits?.length) {
      fetchRepos(URL, 'repos')

    }
  }

  return (
    <div className="list-container">
      <Header icon={<Icon src={logo} alt="Octokat"/>}>
        {"Repositories"}
      </Header>
      <Form getToken={setToken} onSubmit={onSubmit}/>
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
