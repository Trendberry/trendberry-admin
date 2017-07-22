import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import {
  TableCell as MuiTableCell,
  TableSortLabel as MuiTableSortLabel,
} from 'material-ui/Table'
import MuiCheckbox from 'material-ui/Checkbox'

import { Table } from 'containers'
import { TableColumn, TableRowCategoryName } from 'components'


const VendorListPage = ({ count, list }) => {
  return (
    <div>
      <Table
        totalRows={count}
        rows={list}
        title="Vendors"
      >
        <TableColumn
          header={({ handleSelectAllClick }) => (
            <MuiTableCell checkbox style={{ width: '1%' }}>
              <MuiCheckbox onChange={handleSelectAllClick} />
            </MuiTableCell>
          )}
          cell={({ handleRowClick, isSelected, rowIndex }) => (
            <MuiTableCell checkbox>
              <MuiCheckbox onClick={event => handleRowClick(event, list[rowIndex]._id)} checked={isSelected(list[rowIndex]._id)} />
            </MuiTableCell>
          )}
          checkbox
        />
        <TableColumn
          header={({ getSortLink, order, sort }) => (
            <MuiTableCell disablePadding style={{ width: '98%' }}>
              <MuiTableSortLabel
                active={sort === 'name'}
                component={Link}
                direction={order}
                to={getSortLink('name')}
              >
                Name
              </MuiTableSortLabel>
            </MuiTableCell>
          )}
          disablePadding
          cell={({ rowIndex }) => (
            <MuiTableCell disablePadding>
              <TableRowCategoryName item={list[rowIndex]} />
            </MuiTableCell>
          )}
        />

      </Table>
    </div>
  )
}

VendorListPage.propTypes = {
  count: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default VendorListPage
