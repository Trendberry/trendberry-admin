import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getSelectedBlocksMetadata, setBlockData } from 'draftjs-utils'
import { ToggleButton } from 'components'

class AlignStyleControls extends Component {
  state = {
    currentTextAlignment: undefined,
  }

  componentWillReceiveProps(properties) {
    if (properties.editorState !== this.props.editorState) {
      this.setState({
        currentTextAlignment: getSelectedBlocksMetadata(properties.editorState).get('text-align'),
      })
    }
  }

  addBlockAlignmentData = (value) => {
    const { editorState, onChange } = this.props
    const { currentTextAlignment } = this.state
    if (currentTextAlignment !== value) {
      onChange(setBlockData(editorState, { 'text-align': value }))
    } else {
      onChange(setBlockData(editorState, { 'text-align': undefined }))
    }
  }

  render() {
    const { blockTypes } = this.props
    return (
      <div className="RichEditor-controls">
        {blockTypes.map(type => (
          <ToggleButton
            key={type.label}
            active={type.style === this.state.currentTextAlignment}
            label={type.label}
            onToggle={this.addBlockAlignmentData}
            style={type.style}
            icon={type.icon}
          />)
        )}
      </div>
    )
  }
}

AlignStyleControls.propTypes = {
  blockTypes: PropTypes.array.isRequired,
  editorState: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default AlignStyleControls
