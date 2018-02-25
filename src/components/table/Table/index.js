import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { parse, stringify } from 'qs'
import { connect } from 'react-redux'
import Link from 'react-router-dom/Link'
import { withRouter } from 'react-router'
import { push } from 'react-router-redux'
import MuiTable from 'material-ui/Table'
import MuiTableFooter from 'material-ui/Table/TableFooter'
import MuiTableRow from 'material-ui/Table/TableRow'
import MuiTablePagination from 'material-ui/Table/TablePagination'
import MuiPaper from 'material-ui/Paper'
import difference from 'lodash/difference'
import union from 'lodash/union'

import { TableBody, TableHead, TableFooter, TableToolbar } from 'components'

function toInteger(v) {
  return isNaN(v) ? 0 : parseInt(v, 10)
}

function calculateTotalPages(totalItemsInCollection, itemsPerPage) {
  const e = toInteger(totalItemsInCollection)
  const p = toInteger(itemsPerPage)
  return Math.ceil(e / p)
}

function pageLinkPath(location, currentPageNumber) {
  const query = parse(location.search.substr(1))
  currentPageNumber === 1 ? delete query._page : query._page = currentPageNumber

  return {
    ...location,
    search: `?${stringify({
      ...query,
    })}`,
  }
}

class Table extends Component {
  static defaultProps = {
    limitOptions: [10, 20, 50],
  }

  static propTypes = {
    limitOptions: PropTypes.arrayOf(PropTypes.number),
    location: PropTypes.object.isRequired,
    rows: PropTypes.array.isRequired,
  }

  constructor(props) {
    super()

    const query = parse(props.location.search.substr(1))
    this.state = {
      limit: toInteger(query._limit) || props.limitOptions[0],
      order: 'asc',
      selected: [],
    }
  }

  handleSelectAllClick = (event, checked) => {
    const { selected } = this.state
    if (checked) {
      this.setState({ selected: union(selected, this.props.rows.map(n => n._id)) })
      return
    }
    this.setState({ selected: difference(selected, this.props.rows.map(n => n._id))})
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

  headCheckbox = () => {
    const { rows } = this.props
    const { selected } = this.state
    const rowsIds = rows.map(({ _id }) => _id)

    return difference(rowsIds, selected).length
  }

  isHeadCheckboxChecked = () => {
    return this.headCheckbox() === 0
  }

  isHeadCheckboxIntermidiate = () => {
    const { rows } = this.props
    const headCheckbox = this.headCheckbox()
    return (headCheckbox > 0 && headCheckbox < rows.length)
  }

  startIndex = (limit, pageNumber) => {
    return (limit * (pageNumber - 1)) + 1
  }

  endIndex = (limit, pageNumber, count) => {
    return (count >= limit * pageNumber) ? (limit * pageNumber) : count
  }

  hasReversePageLink = pageNumber => ((pageNumber - 1) > 0)
  hasForwardPageLink = (pageNumber, totalPages) => ((pageNumber + 1) <= totalPages)

  reversePageLinkItem = (pageNumber) => {
    const { location } = this.props
    const disabled = !this.hasReversePageLink(pageNumber)
    const n = pageNumber - 1
    return ({
      component: disabled ? 'span' : Link,
      to: pageLinkPath(location, n),
      disabled,
    })
  }

  forwardPageLinkItem = (pageNumber, totalPages) => {
    const { location } = this.props
    const disabled = !this.hasForwardPageLink(pageNumber, totalPages)
    const n = pageNumber + 1
    return ({
      component: disabled ? 'span' : Link,
      to: pageLinkPath(location, n),
      disabled,
    })
  }

  handleChangeRowsPerPage = (event) => {
    const limit = event.target.value
    const { dispatch, limitOptions, location } = this.props
    const query = parse(location.search.substr(1))
    limit === limitOptions[0] ? delete query._limit : query._limit = limit
    delete query._page

    this.setState({ limit })

    dispatch(push({
      ...location,
      search: `?${stringify({
        ...query,
      })}`,
    }))
  }

  render() {
    const { selected, limit } = this.state
    const { children, location, rows, title, toolbar, limitOptions, toolbarAlt, count, ...other } = this.props
    const query = parse(location.search.substr(1))
    // const limit = toInteger(query._limit) || limitOptions[0]
    const page = toInteger(query._page) || 1
    const totalPages = toInteger(calculateTotalPages(count, limit))
    return (
      <MuiPaper>
        <TableToolbar
          title={title}
          numSelected={selected.length}
          content={toolbar}
          contentAlt={toolbarAlt}
        />
        <MuiTable>
          <TableHead isHeadCheckboxChecked={this.isHeadCheckboxChecked()} isHeadCheckboxIntermidiate={this.isHeadCheckboxIntermidiate()} handleSelectAllClick={this.handleSelectAllClick}>{children}</TableHead>
          <TableBody
            handleRowClick={this.handleRowClick}
            isSelected={this.isSelected}
            rows={rows}
            handleSelectAllClick={this.handleSelectAllClick}
          >
            {children}
          </TableBody>
          <MuiTableFooter>
            <MuiTableRow>
              <MuiTablePagination
                colSpan={children.length}
                count={count}
                rowsPerPage={limit}
                page={page}
                backIconButtonProps={{
                  'aria-label': 'Previous Page',
                  ...this.reversePageLinkItem(page),
                }}
                nextIconButtonProps={{
                  'aria-label': 'Next Page',
                  ...this.forwardPageLinkItem(page, totalPages)
                }}
                onChangePage={() => { }}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                rowsPerPageOptions={limitOptions}
              />
            </MuiTableRow>
          </MuiTableFooter>
        </MuiTable>
      </MuiPaper>
    )
  }
}

export default withRouter(connect(null, null)(Table))




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
//   count: PropTypes.number.isRequired,
// }

// Table.defaultProps = {
//   title: null,
//   toolbar: null,
//   count: null,
// }

// export default Table
