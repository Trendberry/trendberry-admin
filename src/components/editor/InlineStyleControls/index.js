import React from 'react'
import PropTypes from 'prop-types'
import { ToggleButton } from 'components'

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle()
  const { blockTypes } = props
  return (
    <div className="RichEditor-controls">
      {blockTypes.map(type => (
        <ToggleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          icon={type.icon}
        />)
      )}
    </div>
  )
}

InlineStyleControls.propTypes = {
  blockTypes: PropTypes.array.isRequired,
  editorState: PropTypes.any.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default InlineStyleControls
