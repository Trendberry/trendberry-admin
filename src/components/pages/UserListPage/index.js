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
import { TableColumn } from 'components'

const styleSheet = createStyleSheet('UserListPage', {
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

const UserListPage = ({ selectedIndex, classes, count, deleteUser, list, open, openDeleteDialog, onRequestCloseDialog }) => (
  <div>
    <Table
      totalRows={count}
      rows={list}
      title="Users"
      toolbar={(
        <MuiIconButton aria-label="Add user" to="/users/create" component={Link}>
          <MuiIconAdd />
        </MuiIconButton>
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
          <MuiTableCell disablePadding style={{ width: '30%' }}>
            <MuiTableSortLabel
              active={sort === 'displayName'}
              component={Link}
              direction={order}
              to={getSortLink('displayName')}
            >
              Name
            </MuiTableSortLabel>
          </MuiTableCell>
        )}
        disablePadding
        cell={({ rowIndex }) => (
          <MuiTableCell disablePadding>
            {list[rowIndex].displayName}
          </MuiTableCell>
        )}
      />
      <TableColumn
        header={({ getSortLink, order, sort }) => (
          <MuiTableCell>
            <MuiTableSortLabel
              active={sort === 'email'}
              component={Link}
              direction={order}
              to={getSortLink('email')}
            >
              Email
            </MuiTableSortLabel>
          </MuiTableCell>
        )}
        cell={({ rowIndex }) => (
          <MuiTableCell>
            {list[rowIndex].email}
          </MuiTableCell>
        )}
      />
      <TableColumn
        header={() => <MuiTableCell />}
        cell={({ rowIndex }) => (
          <MuiTableCell classes={{ root: classes.actionsCell }} disablePadding style={{ width: '1%' }}>
            <div className={classes.actions}>
              <MuiIconButton aria-label={`Edit user ${list[rowIndex].email}`} to={`/users/${list[rowIndex]._id}`} component={Link}>
                <MuiModeEditIcon />
              </MuiIconButton>
              <MuiIconButton aria-label={`Detele user ${list[rowIndex].email}`} onClick={event => openDeleteDialog(rowIndex, event)}>
                <MuiDeleteIcon />
              </MuiIconButton>
            </div>
          </MuiTableCell>
        )}
      />
    </Table>
    {selectedIndex !== undefined && (<MuiDialog open={open} onRequestClose={onRequestCloseDialog}>
      <MuiDialogTitle>Delete user?</MuiDialogTitle>
      <MuiDialogContent>
        <MuiTypography>
          You are about to delete user<b> {list[selectedIndex].email}</b>.
          <br />Are you sure?
        </MuiTypography>
      </MuiDialogContent>
      <MuiDialogActions>
        <MuiButton onClick={onRequestCloseDialog} color="default">Cancel</MuiButton>
        <MuiButton onClick={() => deleteUser(list[selectedIndex]._id)} color="primary">Ok</MuiButton>
      </MuiDialogActions>
    </MuiDialog>)}
  </div>
)

UserListPage.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  deleteUser: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRequestCloseDialog: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  openDeleteDialog: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number,
}

export default withStyles(styleSheet)(UserListPage)
