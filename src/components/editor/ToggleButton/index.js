import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import MuiIconButton from 'material-ui/IconButton'

const styleSheet = createStyleSheet('ToggleButton', theme => ({
  button: {
    color: theme.palette.text.icon,
  },
  active: {
    color: theme.palette.text.secondary,
  },
}))

class ToggleButton extends Component {
  constructor() {
    super()
    this.onToggle = (e) => {
      e.preventDefault()
      this.props.onToggle(this.props.style)
    }
  }

  render() {
    const { classes } = this.props

    let className = classes.button
    if (this.props.active) {
      className += ` ${classes.active}`
    }

    const Icon = this.props.icon

    return (
      <MuiIconButton className={className} onMouseDown={this.onToggle}>
        {this.props.icon ? <Icon /> : this.props.label}
      </MuiIconButton>
    )
  }
}

ToggleButton.propTypes = {
  active: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  icon: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
}

export default withStyles(styleSheet)(ToggleButton)
