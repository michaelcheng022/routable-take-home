import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ListItem from './ListItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchData, creators } from 'store/app/actions';

const URL = `https://api.github.com/user/repos`
const TEST_URL = 'https://api.github.com/repositories?since=364'

const List = props => {
  console.log(props)
  const { dispatch, sourceType } = props
  const [items, setItems] = useState([])
  const [active, setActive] = useState(props.active)

  useEffect(() => {
      async function fetchItems() {
        const data = await dispatch(fetchData(TEST_URL, sourceType))
        setItems(data.hits)
      }

      fetchItems()
    },[])


  return (
    <div className="item-list">
      {items?.length && items.map((item, i) => {
        console.log(item)
      return (
        <ListItem key={i} setActive={dispatch(creators.setActiveRepo)} item={item} />
      )
      })}
    </div>
  )
}

List.propTypes = {
  sourceType: PropTypes.string,
}

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

