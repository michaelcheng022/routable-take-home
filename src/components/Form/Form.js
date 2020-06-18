import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

const Form = ({ getToken, onSubmit }) => {
  return (
    <div className="form-container">
      <form className="form" onSubmit={onSubmit}>
        <label>API_KEY: </label>
        <Input
           callback={getToken}
         />
        <button type="submit" value="Submit" required>Submit</button>
      </form>
    </div>
  )
}

Form.propTypes = {

}

export default Form
