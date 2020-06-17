
import React, { useState, useEffect} from 'react'
import { bindActionCreators } from 'redux'
import List from './shared/List'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchData, creators, fetchActive } from 'store/app/actions';

const Repos = (props) => {
  return (
    <List
      active={props.active}
      fetchData={props.fetchData}
      setActiveRepo={props.setActiveRepo}
      sourceType="repos"
    />
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchData, fetchActive, setActiveRepo: creators.setActiveRepo }, dispatch)
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
