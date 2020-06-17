<<<<<<< HEAD
import React, { useState, propTypes} from 'react'
import Loader from './Loader'
import ListItem from './ListItem'
import PropTypes from 'prop-types'
import {ReactComponent as IssueLogo} from '../../issue-opened.svg';
const List = (props) => {
  const [active, setActive] = useState(props.active)
  const {
    card,
    fetching,
    items,
    sourceType,
    setActiveRepo
  } = props

  const handleClick = (item) => {
    setActive(item)
    if (sourceType === 'repos') {
      setActiveRepo(item)
    }
  }

  const emptyDataMsg = sourceType === 'repos'
    ? 'No repositories fetched.'
    : `There aren't any open issues.`
  const showLoader = fetching
    ? <div className="loader-container"><Loader /></div>
    : <div style={{ marginTop: 20 }}>
        <IssueLogo />
        <h3>{emptyDataMsg}</h3>
      </div>

  return (
    <div className={ sourceType === 'repos' ? 'repos-list' : 'issues-list'}>
      {items?.length > 0 ? items.map((item, index) => {
        return (
          <ListItem
            active={active?.id === item?.id}
            card={card}
            key={item.id}
            onClick={handleClick}
            item={item}
            index={index}
            itemsLen={items.length}
            sourceType={sourceType}
          />
        )
        }) : showLoader}
=======
import React, { useState, useEffect} from 'react'
import Loader from './Loader'
import ListItem from './ListItem'
import PropTypes from 'prop-types'


const List = props => {

  const { sourceType, items } = props
  const [active, setActive] = useState(props.active)

  const handleClick = (item) => {
    setActive(item)
    if (sourceType === 'repos') {
      props.setActiveRepo(item)
    }
  }

  // const loader = () => {
  //   setTimeout(() => {

  //   })
  // }
  return (
    <div className={ sourceType === 'repos' ? 'repos-list' : 'issues-list'}>
      {items?.length > 0 ? items.map((item, index) => {
      return (
        <ListItem
          card={props.card}
          key={item.id}
          onClick={handleClick}
          item={item}
          index={index}
          itemsLen={items.length}
          sourceType={props.sourceType}
        />
      )
<<<<<<< HEAD
<<<<<<< HEAD
      })}
>>>>>>> ff37e53... config redux store && refactor list components
=======
      }) : <Loader />}
>>>>>>> 1d1c2dd... added loader
=======
      }) : <div className="loader-container"><Loader /></div>}
>>>>>>> 403d5bd... add prioritize issues functionality
    </div>
  )
}

List.propTypes = {
<<<<<<< HEAD
  active: PropTypes.object,
  fetching: PropTypes.bool,
  items: PropTypes.object,
  sourceType: PropTypes.string,
  setActiveRepo: PropTypes.func
}

export default List
=======
  sourceType: PropTypes.string,
}

<<<<<<< HEAD
// const mapDispatchToProps = dispatch => {
//   fetchData: ()
// }

const mapStateToProps = (state) => {
  return {
    url: state.app.url,
    hits: state.app.hits,
    active: state.app.active
  };
};
export default connect(mapStateToProps)(List);
>>>>>>> ff37e53... config redux store && refactor list components
=======
export default List
>>>>>>> 1c9b691... move to containers && update redux store state

