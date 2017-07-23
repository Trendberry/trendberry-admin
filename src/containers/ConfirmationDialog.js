import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ConfirmationDialog } from 'components'

class ConfirmationDialogContainer extends Component {
  handleEntering = () => {
    // this.radioGroup.focus()
  }

  handleCancel = () => {
    this.props.onRequestClose()
  }

  handleOk = () => {
    this.props.onRequestClose()
  }

  render() {
    return (
      <ConfirmationDialog {...this.props} />
    )
  }
}

ConfirmationDialogContainer.propTypes = {
  onRequestClose: PropTypes.func,
}

export default ConfirmationDialogContainer
