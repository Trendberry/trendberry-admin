import React from 'react'
import PropTypes from 'prop-types'
import MuiTable from 'material-ui/Table'
import MuiPaper from 'material-ui/Paper'

import { TableBody, TableHead, TableFooter, TableToolbar } from 'components'

const Table = ({ children, isSelected, numSelected, rows, title, totalRows, ...props }) => (
  <MuiPaper>
    <TableToolbar title={title} numSelected={numSelected} />
    <MuiTable>
      <TableHead handleSelectAllClick={props.handleSelectAllClick}>{children}</TableHead>
      <TableBody
        handleRowClick={props.handleRowClick}
        isSelected={isSelected}
        rows={rows}
        handleSelectAllClick={props.handleSelectAllClick}
      >
        {children}
      </TableBody>
    </MuiTable>
    <TableFooter count={totalRows} />
  </MuiPaper>
)

Table.propTypes = {
  children: PropTypes.any.isRequired,
  handleRowClick: PropTypes.func.isRequired,
  handleSelectAllClick: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
  numSelected: PropTypes.number.isRequired,
  rows: PropTypes.arrayOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
  totalRows: PropTypes.number.isRequired,
}

export default Table
