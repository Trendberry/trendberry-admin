import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import MuiInput, { InputLabel as MuiInputLabel } from 'material-ui/Input'
import MuiFormControl from 'material-ui/Form/FormControl'
import MuiFormHelperText from 'material-ui/Form/FormHelperText'

const styleSheet = createStyleSheet('TextField', theme => ({
  root: {
    width: '100%',
  },
  underline: {
    '&:before': {
      backgroundColor: theme.palette.text.divider,
      transition: 'background-color 180ms cubic-bezier(0.4, 0, 0.2, 1), transform 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1)',
      height: 2,
    },
  },
}))

const TextField = (props) => {
  const {
    className: classNameProp,
    classes,
    disabled,
    input,
    label,
    meta,
    multiline,
    required,
    type,
  } = props

  const className = classNames(
    classes.root,
    classNameProp,
  )

  const inputProps = {
    name: input.name,
    'aria-describedby': `${input.name}Error`,
    autoComplete: 'off',
  }

  console.log(props)

  return (
    <MuiFormControl className={className} required={required} disabled={disabled} error={meta.touched && meta.invalid} margin="normal">
      {label && <MuiInputLabel htmlFor={input.name}>{label}</MuiInputLabel>}
      <MuiInput
        id={input.name}
        classes={{
          underline: classes.underline,
        }}
        multiline={multiline}
        inputProps={inputProps}
        type={type}
        {...input}
      />
      {/* {meta.touched && meta.invalid && <MuiFormHelperText>{meta.error}</MuiFormHelperText>} */}
    </MuiFormControl>
  )
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.any,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  // invalid: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  input: PropTypes.any,
}

TextField.defaultProps = {
  type: 'text',
}

export default withStyles(styleSheet)(TextField)
