import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <div className="header-container">
<<<<<<< HEAD
      {props?.icon}
=======
>>>>>>> 7e9c1a9... configure styles for components
      <h1 className="header">
        {props.children}
      </h1>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
