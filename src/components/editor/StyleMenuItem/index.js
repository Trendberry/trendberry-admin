import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiMenuItem from 'material-ui/Menu/MenuItem'

class StyleMenuItem extends Component {
  constructor() {
    super()
    this.onToggle = (e) => {
      e.preventDefault()
      this.props.onToggle(this.props.style)
    }
  }

  render() {
    return (
      <MuiMenuItem onMouseUp={this.props.onMouseUp} onMouseDown={this.onToggle} selected={this.props.active}>
        {this.props.label}
      </MuiMenuItem>
    )
  }
}

StyleMenuItem.propTypes = {
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onMouseUp: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
}

export default StyleMenuItem
