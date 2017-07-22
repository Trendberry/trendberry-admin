import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import { withRouter } from 'react-router'
import {
  TableBody as MuiTableBody,
  TableRow as MuiTableRow,
  TableCell as MuiTableCell,
} from 'material-ui/Table'

const styleSheet = createStyleSheet('TableBody', {

})

class TableHead extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.array.isRequired,
    handleRowClick: PropTypes.func.isRequired,
    isSelected: PropTypes.func.isRequired,
    rows: PropTypes.array.isRequired,
  }

  render() {
    const { children, handleRowClick, isSelected, rows } = this.props

    return (
      <MuiTableBody>
        {rows.map((row, index) => {
          const isRowSelected = isSelected(row._id)
          return (
            <MuiTableRow
              hover
              key={row._id}
              selected={isRowSelected}
            >
              {React.Children.map(children, (child) => {
                if (child.type.muiName === 'TableColumn') {
                  const { cell, header, ...other } = child.props

                  const cellProps = {
                    handleRowClick,
                    isSelected,
                    rowIndex: index,
                    ...other,
                  }

                  let content
                  if (React.isValidElement(child.props.cell)) {
                    content = React.cloneElement(child.props.cell, cellProps)
                  } else if (typeof child.props.cell === 'function') {
                    content = child.props.cell(cellProps)
                  } else {
                    content = (
                      <MuiTableCell {...other}>
                        {child.props.cell}
                      </MuiTableCell>
                    )
                  }
                  return content
                }
                return null
              })}
            </MuiTableRow>
          )
        })}
      </MuiTableBody>
    )
  }
}

export default withRouter(withStyles(styleSheet)(TableHead))
