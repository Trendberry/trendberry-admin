import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiTable from 'material-ui/Table'
import MuiTableFooter from 'material-ui/Table/TableFooter'
import MuiTableRow from 'material-ui/Table/TableRow'
import MuiTablePagination from 'material-ui/Table/TablePagination'
import MuiPaper from 'material-ui/Paper'

import { TableBody, TableHead, TableFooter, TableToolbar } from 'components'

class Table extends Component {
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

    const { children, rows, title, toolbar, toolbarAlt, totalRows, ...other } = this.props

    return (
      <MuiPaper>
        <TableToolbar
          title={title}
          numSelected={selected.length}
          content={toolbar}
          contentAlt={toolbarAlt}
        />
        <MuiTable>
          <TableHead handleSelectAllClick={this.handleSelectAllClick}>{children}</TableHead>
          <TableBody
            handleRowClick={this.handleRowClick}
            isSelected={this.isSelected}
            rows={rows}
            handleSelectAllClick={this.handleSelectAllClick}
          >
            {children}
          </TableBody>
        </MuiTable>
        <MuiTableFooter>
          <MuiTableRow>
            <MuiTablePagination
              colSpan={6}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </MuiTableRow>
        </MuiTableFooter>
      </MuiPaper>
    )
  }
}

export default Table




// Table.propTypes = {
//   children: PropTypes.any.isRequired,
//   handleRowClick: PropTypes.func.isRequired,
//   handleSelectAllClick: PropTypes.func.isRequired,
//   isSelected: PropTypes.func.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   rows: PropTypes.arrayOf(PropTypes.any).isRequired,
//   title: PropTypes.string.isRequired,
//   toolbar: PropTypes.any,
//   toolbarAlt: PropTypes.any,
//   totalRows: PropTypes.number.isRequired,
// }

// Table.defaultProps = {
//   title: null,
//   toolbar: null,
//   totalRows: null,
// }

// export default Table
