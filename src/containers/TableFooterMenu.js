import React, { Component } from 'react'
import { TableFooterMenu } from 'components'

class TableFooterMenuContainer extends Component {
  state = {
    anchorEl: undefined,
    open: false,
  }

  handleRequestOpen = event => this.setState({
    open: true,
    anchorEl: event.currentTarget,
  })

  handleRequestClose = () => this.setState({ open: false })

  render() {
    return (
      <TableFooterMenu
        anchorEl={this.state.anchorEl}
        handleRequestOpen={this.handleRequestOpen}
        handleRequestClose={this.handleRequestClose}
        open={this.state.open}
        {...this.props}
      />
    )
  }
}

export default TableFooterMenuContainer
