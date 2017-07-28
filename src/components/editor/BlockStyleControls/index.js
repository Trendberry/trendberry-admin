import React from 'react'
import PropTypes from 'prop-types'
import { ToggleButton } from 'components'

const BlockStyleControls = (props) => {
  const { editorState, blockTypes } = props
  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  return (
    <div className="RichEditor-controls">
      {blockTypes.map(type => (
        <ToggleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          icon={type.icon}
        />)
      )}
    </div>
  )
}


BlockStyleControls.propTypes = {
  blockTypes: PropTypes.array.isRequired,
  editorState: PropTypes.any.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default BlockStyleControls
