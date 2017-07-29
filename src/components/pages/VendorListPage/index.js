import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import MuiButton from 'material-ui/Button'
import MuiIconButton from 'material-ui/IconButton'
import MuiModeEditIcon from 'material-ui-icons/ModeEdit'
import MuiDeleteIcon from 'material-ui-icons/Delete'
import MuiCheckbox from 'material-ui/Checkbox'
import MuiTypography from 'material-ui/Typography'
import MuiIconAdd from 'material-ui-icons/Add'
import MuiDialog, {
  DialogActions as MuiDialogActions,
  DialogContent as MuiDialogContent,
  DialogTitle as MuiDialogTitle,
} from 'material-ui/Dialog'
import {
  TableCell as MuiTableCell,
  TableSortLabel as MuiTableSortLabel,
} from 'material-ui/Table'
import { Table } from 'containers'
import { SearchWidget, TableColumn } from 'components'

const styleSheet = createStyleSheet('VendorListPage', {
  actionsCell: {
    padding: 0,
    paddingRight: 2,
  },
  actions: {
    display: 'none',
    'tr:hover &': {
      display: 'block',
    },
  },
})

const VendorListPage = ({ selectedIndex, classes, count, deleteVendor, list, open, openDeleteDialog, onRequestCloseDialog }) => (
  <div>
    <Table
      totalRows={count}
      rows={list}
      title="Vendors"
      toolbar={(
        <div>
          <SearchWidget />
          <MuiIconButton aria-label="Add vendor" to="/vendors/create" component={Link}>
            <MuiIconAdd />
          </MuiIconButton>
        </div>
      )}
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
            {list[rowIndex].name}
          </MuiTableCell>
        )}
      />
      <TableColumn
        header={() => <MuiTableCell />}
        cell={({ rowIndex }) => (
          <MuiTableCell classes={{ root: classes.actionsCell }} disablePadding>
            <div className={classes.actions}>
              <MuiIconButton aria-label={`Edit vendor ${list[rowIndex].name}`} to={`/vendors/${list[rowIndex]._id}`} component={Link}>
                <MuiModeEditIcon />
              </MuiIconButton>
              <MuiIconButton aria-label={`Detele vendor ${list[rowIndex].name}`} onClick={event => openDeleteDialog(rowIndex, event)}>
                <MuiDeleteIcon />
              </MuiIconButton>
            </div>
          </MuiTableCell>
        )}
      />
    </Table>
    {selectedIndex !== undefined && (<MuiDialog open={open} onRequestClose={onRequestCloseDialog}>
      <MuiDialogTitle>Delete vendor?</MuiDialogTitle>
      <MuiDialogContent>
        <MuiTypography>
          You are about to delete vendor<b> {list[selectedIndex].name}</b>.
          <br />Are you sure?
        </MuiTypography>
      </MuiDialogContent>
      <MuiDialogActions>
        <MuiButton onClick={onRequestCloseDialog} color="default">Cancel</MuiButton>
        <MuiButton onClick={() => deleteVendor(list[selectedIndex]._id)} color="primary">Ok</MuiButton>
      </MuiDialogActions>
    </MuiDialog>)}
  </div>
)

VendorListPage.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  deleteVendor: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRequestCloseDialog: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  openDeleteDialog: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number,
}

VendorListPage.defulatProps = {
  selectedIndex: null,
}
export default withStyles(styleSheet)(VendorListPage)
