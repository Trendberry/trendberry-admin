import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Editor, EditorState, RichUtils } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
// import { stateFromHTML } from 'draft-js-import-html'
// import { stateFromElement } from 'draft-js-import-element'

import { withStyles } from 'material-ui/styles'
import MuiToolbar from 'material-ui/Toolbar'
import MuiIconFormatBold from 'material-ui-icons/FormatBold'
import MuiIconFormatItalic from 'material-ui-icons/FormatItalic'
import MuiIconFormatUnderlined from 'material-ui-icons/FormatUnderlined'

import MuiIconFormatAlignLeft from 'material-ui-icons/FormatAlignLeft'
import MuiIconFormatAlignRight from 'material-ui-icons/FormatAlignRight'
import MuiIconFormatAlignCenter from 'material-ui-icons/FormatAlignCenter'
import MuiIconFormatAlignJustify from 'material-ui-icons/FormatAlignJustify'

import MuiIconFormatListBulleted from 'material-ui-icons/FormatListBulleted'
import MuiIconFormatListNumbered from 'material-ui-icons/FormatListNumbered'

import { AlignStyleControls, BlockStyleMenuControls, InlineStyleControls, BlockStyleControls } from 'components'


const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
  ALIGNLEFT: {
    display: 'block',
    textAlign: 'left',
  },
  ALIGNRIGHT: {
    display: 'block',
    textAlign: 'right',
  },
  ALIGNCENTER: {
    display: 'block',
    textAlign: 'center',
  },
  ALIGNJUSTIFY: {
    display: 'block',
    textAlign: 'justify',
  },
}

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote'
    default: return null
  }
}

const ALIGN_STYLES = [
  { label: 'Align Left', style: 'left', icon: MuiIconFormatAlignLeft },
  { label: 'Align Center', style: 'center', icon: MuiIconFormatAlignCenter },
  { label: 'Align Right', style: 'right', icon: MuiIconFormatAlignRight },
  { label: 'Justify', style: 'justify', icon: MuiIconFormatAlignJustify },
]

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD', icon: MuiIconFormatBold },
  { label: 'Italic', style: 'ITALIC', icon: MuiIconFormatItalic },
  { label: 'Underline', style: 'UNDERLINE', icon: MuiIconFormatUnderlined },
  // { label: 'Monospace', style: 'CODE' },
]

const BLOCK_TYPES = [
  { label: 'Paragraph', style: 'unstyled' },
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  // { label: 'Unstyled', style: 'unstyled' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'Code Block', style: 'code-block' },
]

const LIST_BLOCK_TYPES = [
  { label: 'UL', style: 'unordered-list-item', icon: MuiIconFormatListBulleted },
  { label: 'OL', style: 'ordered-list-item', icon: MuiIconFormatListNumbered },
]

const styleSheet = (theme) => ({
  root: {
    border: `1px solid ${theme.palette.text.divider}`,
  },
  toolabr: {
    backgroundColor: theme.palette.text.lightDivider,
    borderBottom: `1px solid ${theme.palette.text.divider}`,
    height: 56,
  },
  divider: {
    borderRight: `1px solid ${theme.palette.text.divider}`,
    display: 'inline-flex',
    height: 32,
    marginLeft: 12,
    marginRight: 12,
  },
  editor: {
    '& .public-DraftEditorPlaceholder-root': {
      margin: '0 0 -51px',
      padding: 16,
    },
    '& .public-DraftEditorPlaceholder-hasFocus': {
      color: theme.palette.text.hint,
    },
    '& .public-DraftEditor-content': {
      padding: 16,
      position: 'relative',
      zIndex: 2,
    },
    '& textarea': {
      display: 'none',
    },
  },
  hidePlaceholder: {
    '& .public-DraftEditorPlaceholder-root': {
      display: 'none',
    },
  },
})

class DraftRichEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }

    this.focus = () => this.editor.focus()
    this.onChange = (editorState) => {
      const options = {
        blockStyleFn: (block) => {
          if (block.getData().get('text-align')) {
            return {
              style: {
                textAlign: block.getData().get('text-align'),
              },
            }
          }
          return {}
        },
      }

      const html = stateToHTML(editorState.getCurrentContent(), options)
      this.setState({
        editorState,
        html,
      })
    }

    this.onChange = editorState => this.setState({ editorState })

    this.handleKeyCommand = command => this.triggerHandleKeyCommand(command)
    this.onTab = e => this.triggerOnTab(e)
    this.toggleBlockType = type => this.triggetToggleBlockType(type)
    this.toggleInlineStyle = style => this.triggetToggleInlineStyle(style)
  }

  triggerOnTab(e) {
    const maxDepth = 4
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth))
  }

  triggerHandleKeyCommand(command) {
    const { editorState } = this.state
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  triggetToggleBlockType(blockType) {
    const { editorState } = this.state
    this.onChange(
      RichUtils.toggleBlockType(
        editorState,
        blockType
      )
    )
  }

  triggetToggleInlineStyle(inlineStyle) {
    const { editorState } = this.state
    this.onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        inlineStyle
      )
    )
  }

  render() {
    const { classes } = this.props
    const { editorState, html } = this.state


    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = classes.editor
    const contentState = editorState.getCurrentContent()
    // var contentState = stateFromHTML('<div></div>')
    // var contentState = stateFromElement('<div></div>')
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ` ${classes.hidePlaceholder}`
      }
    }


    return (
      <div className={classes.root}>
        <MuiToolbar className={classes.toolabr} spacing={0}>
          <BlockStyleMenuControls
            blockTypes={BLOCK_TYPES}
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <div className={classes.divider} style={{ marginLeft: 0 }} />
          <InlineStyleControls
            blockTypes={INLINE_STYLES}
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <div className={classes.divider} />
          <AlignStyleControls
            blockTypes={ALIGN_STYLES}
            editorState={editorState}
            onChange={this.onChange}
          />
          <div className={classes.divider} />
          <BlockStyleControls
            blockTypes={LIST_BLOCK_TYPES}
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
        </MuiToolbar>
        <div className={className} onClick={() => this.focus} role="button" tabIndex="-1">
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            editorKey="foobaz"
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder="Description"
            ref={(editor) => { this.editor = editor }}
            spellCheck
          />
          <textarea value={html} />
        </div>
      </div>
    )
  }
}

DraftRichEditor.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet, { name: 'DraftRichEditor' })(DraftRichEditor)
