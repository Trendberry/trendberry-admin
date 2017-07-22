import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import MuiButton from 'material-ui/Button'
import MuiDialog, { DialogActions as MuiDialogActions, DialogContent as MuiDialogContent, DialogTitle as MuiDialogTitle } from 'material-ui/Dialog'

const ConfirmationDialog = ({ actions, title, content, ...other }) => (
  <MuiDialog {...other}>
    {title && <MuiDialogTitle>{title}</MuiDialogTitle>}
    {content && (<MuiDialogContent>
      {content}
    </MuiDialogContent>)}
    <MuiDialogActions>
      {actions}
    </MuiDialogActions>
  </MuiDialog>
)

ConfirmationDialog.propTypes = {
  actions: PropTypes.any,
  title: PropTypes.any,
  content: PropTypes.any,
}

ConfirmationDialog.defaultProps = {
  actions: null,
  title: null,
  content: null,
}

export default ConfirmationDialog
