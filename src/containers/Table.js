import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'components'

class TableContainer extends Component {
  static propTypes = {
    rows: PropTypes.array.isRequired,
  }

  state = {
    order: 'asc',
    selected: [],
  }

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({ selected: this.props.rows.map(n => n._id) })
      return
    }
    this.setState({ selected: [] })
  }

  // handleKeyDown = (event, id) => {
  //   if (keycode(event) === 'space') {
  //     this.handleRowClick(event, id)
  //   }
  // }

  handleRowClick = (event, id) => {
    const { selected } = this.state
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    this.setState({ selected: newSelected })
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1

  render() {
    const { selected } = this.state

    return (
      <Table
        handleRowClick={this.handleRowClick}
        handleSelectAllClick={this.handleSelectAllClick}
        isSelected={this.isSelected}
        numSelected={selected.length}
        {...this.props}
      />
    )
  }
}

export default TableContainer
