import React, { Component } from 'react'
import MuiSnackbar from 'material-ui/Snackbar'

class SnackbarContainer extends Component {
  state = {
    open: true,
  }

  // handleClick = () => {
  //   this.setState({ open: true })
  // }

  handleRequestClose = (event, reason) => {
    if (reason !== 'clickaway')
      this.setState({ open: false })
  }

  render() {
    return (
      <MuiSnackbar
        open={this.state.open}
        onRequestClose={this.handleRequestClose}
        {...this.props}
      />
    )
  }
}

export default SnackbarContainer
