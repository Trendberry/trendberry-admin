import React from 'react'
import PropTypes from 'prop-types'

const Field = ({ error, name, invalid, label, type, ...props }) => {
  const inputProps = { id: name, name, type, invalid, 'aria-describedby': `${name}Error`, ...props }
  const renderInputFirst = type === 'checkbox' || type === 'radio'
  return (
    <div>
      {renderInputFirst && <input {...inputProps} />}
      {label && <label htmlFor={inputProps.id}>{label}</label>}
      {renderInputFirst || <input {...inputProps} />}
      {invalid && error &&
        <div id={`${name}Error`} role="alert" palette="danger">
          {error}
        </div>
      }
    </div>
  )
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

Field.defaultProps = {
  type: 'text',
}

export default Field
