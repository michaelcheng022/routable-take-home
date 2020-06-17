import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <div className="header-container">
      {props?.icon}
<<<<<<< HEAD
=======
>>>>>>> 7e9c1a9... configure styles for components
=======
>>>>>>> 888f616... merge with develop
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
