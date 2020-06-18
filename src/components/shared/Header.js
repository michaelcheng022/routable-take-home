import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <div className="header-container">
<<<<<<< HEAD
      {props?.icon}
=======
>>>>>>> origin/develop
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
