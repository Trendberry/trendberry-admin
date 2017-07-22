import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import MuiTable from 'material-ui/Table'
import MuiPaper from 'material-ui/Paper'

import { TableBody, TableHead, TableFooter, TableToolbar } from 'components'

const styleSheet = createStyleSheet('Table', {
  cardHeader: {
    paddingLeft: 24,
    paddingRight: 24,
  },
})

const Table = ({ children, classes, handleRowClick, isSelected, numSelected, rows, title, totalRows, ...props }) => (
  <MuiPaper>
    <TableToolbar title={title} numSelected={numSelected} />
    <MuiTable>
      <TableHead handleSelectAllClick={props.handleSelectAllClick}>{children}</TableHead>
      <TableBody
        handleRowClick={handleRowClick}
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
  classes: PropTypes.object.isRequired,
  handleRowClick: PropTypes.func.isRequired,
  handleSelectAllClick: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
  numSelected: PropTypes.number.isRequired,
  rows: PropTypes.arrayOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
  totalRows: PropTypes.number.isRequired,
}

export default withStyles(styleSheet)(Table)
