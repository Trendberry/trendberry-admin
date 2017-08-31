import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import MuiIconArrowDropDown from 'material-ui-icons/ArrowDropDown'
import MuiIconArrowDropUp from 'material-ui-icons/ArrowDropUp'
import MuiButton from 'material-ui/Button'
import MuiMenu from 'material-ui/Menu/Menu'
import { StyleMenuItem } from 'components'

const styleSheet = ({
  button: {
    fontSize: '16px',
    fontWeight: 400,
    height: 56,
    paddingLeft: 24,
    paddingRight: 16,
    textTransform: 'none',
  },
})

class BlockStyleMenuControls extends Component {
  state = {
    anchorEl: undefined,
    open: false,
  }

  handleClick = event => this.setState({
    open: true,
    anchorEl: event.currentTarget,
  })

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes, editorState, blockTypes } = this.props
    const selection = editorState.getSelection()
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType()

    const currentType = blockTypes.find((element) => {
      return element.style === blockType
    })

    return (
      <div className="RichEditor-controls">
        <MuiButton
          className={classes.button}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {currentType ? currentType.label : 'Typography'}

          {!this.state.open ? <MuiIconArrowDropDown /> : <MuiIconArrowDropUp />}
        </MuiButton>
        <MuiMenu
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          {blockTypes.map(type => (
            <StyleMenuItem
              key={type.style}
              active={type.style === blockType}
              label={type.label}
              onToggle={this.props.onToggle}
              onMouseUp={this.handleRequestClose}
              style={type.style}
            />)
          )}
        </MuiMenu>
      </div>
    )
  }
}

BlockStyleMenuControls.propTypes = {
  blockTypes: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  editorState: PropTypes.any.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default withStyles(styleSheet, { name: 'BlockStyleMenuControls' })(BlockStyleMenuControls)
