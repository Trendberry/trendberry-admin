import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import MuiButton from 'material-ui/Button'
import MuiIconButton from 'material-ui/IconButton'
import MuiModeEditIcon from 'material-ui-icons/ModeEdit'
import MuiDeleteIcon from 'material-ui-icons/Delete'
// import IconMoreVert from 'material-ui-icons/MoreVert'
// import dateFormat from 'dateformat'
import MuiDialog, { DialogActions as MuiDialogActions, DialogContent as MuiDialogContent, DialogTitle as MuiDialogTitle } from 'material-ui/Dialog'


import {
  TableCell as MuiTableCell,
  TableSortLabel as MuiTableSortLabel,
} from 'material-ui/Table'
import MuiCheckbox from 'material-ui/Checkbox'

import { Table } from 'containers'
import { TableColumn, TableRowCategoryName } from 'components'
import MuiTypography from 'material-ui/Typography'

export const styleSheet = createStyleSheet('CategoryListPage', {
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

const CategoryListPage = ({ selectedIndex, classes, count, deleteCategory, list, open, openDeleteDialog, onRequestCloseDialog }) => (
  <div>
    <Table
      totalRows={count}
      rows={list}
      title="Categories"
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
      <TableColumn
        header={() => <MuiTableCell />}
        cell={({ rowIndex }) => (
          <MuiTableCell classes={{ root: classes.actionsCell }} disablePadding>
            <div className={classes.actions}>
              <MuiIconButton aria-label={`Edit category ${list[rowIndex].name}`} to={`/categories/${list[rowIndex]._id}`} component={Link}>
                <MuiModeEditIcon />
              </MuiIconButton>
              <MuiIconButton aria-label={`Detele category ${list[rowIndex].name}`} onClick={event => openDeleteDialog(rowIndex, event)}>
                <MuiDeleteIcon />
              </MuiIconButton>
            </div>
          </MuiTableCell>
        )}
      />
    </Table>
    {selectedIndex !== undefined && (<MuiDialog open={open} onRequestClose={onRequestCloseDialog}>
      <MuiDialogTitle>Delete category?</MuiDialogTitle>
      <MuiDialogContent>
        <MuiTypography>
          You are about to delete category<b> {list[selectedIndex].name}</b>.
          <br />Are you sure?
        </MuiTypography>
      </MuiDialogContent>
      <MuiDialogActions>
        <MuiButton onClick={onRequestCloseDialog} color="default">Cancel</MuiButton>
        <MuiButton onClick={() => deleteCategory(list[selectedIndex]._id)} color="primary">Ok</MuiButton>
      </MuiDialogActions>
    </MuiDialog>)}
  </div>
)

CategoryListPage.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRequestCloseDialog: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  openDeleteDialog: PropTypes.func.isRequired,
  selectedIndex: PropTypes.string,
}

CategoryListPage.defulatProps = {
  selectedIndex: null,
}
export default withStyles(styleSheet)(CategoryListPage)
