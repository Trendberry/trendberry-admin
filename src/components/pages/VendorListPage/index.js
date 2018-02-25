import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import Link from 'react-router-dom/Link'
import isEqual from 'lodash/isEqual'
import { withStyles } from 'material-ui/styles'
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
import { Table, SearchWidget, TableColumn } from 'components'
import { fromResource, fromEntities, fromStatus } from 'store/selectors'
import { resourceListReadRequest, resourceDeleteRequest } from 'store/actions'

const styleSheet = {
  actionsCell: {
    padding: 0,
    paddingRight: 2,
  },
  actions: {
    display: 'none',
    whiteSpace: 'nowrap',
    'tr:hover &': {
      display: 'block',
    },
  },
}

class VendorListPage extends Component {
  static get({ store, query }) {
    return store.dispatch(resourceListReadRequest('vendors', query))
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    deleteVendorRequest: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  state = {
    // anchorEl: undefined,
    open: false,
    selectedIndex: undefined,
  }

  handleOpenDeleteDialog = rowIndex => event => {
    this.setState({ open: true, selectedIndex: rowIndex })
  }

  handleDeleteVendor = (id) => () => {
    this.handleRequestCloseDialog()
    this.props.deleteVendorRequest(id)
    // .then((vendor) => {
    //   // console.log(vendor)
    // })
  }

  handleRequestCloseDialog = () => {
    this.setState({ open: false })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('props', this.props.isLoading)
    // console.log('nextProps', nextProps.isLoading)
    return !(this.props.isLoading || nextProps.isLoading)
  }

  render() {
    const { open, selectedIndex } = this.state
    const { classes, count, deleteVendor, list } = this.props
    // console.log('here')
    return (
      <div>
        <Table
          count={count}
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
              <MuiTableCell padding="checkbox" style={{ width: '1%' }}>
                <MuiCheckbox onChange={handleSelectAllClick} />
              </MuiTableCell>
            )}
            cell={({ handleRowClick, isSelected, rowIndex }) => (
              <MuiTableCell padding="checkbox">
                <MuiCheckbox onClick={event => handleRowClick(event, list[rowIndex]._id)} checked={isSelected(list[rowIndex]._id)} />
              </MuiTableCell>
            )}
            checkbox
          />
          <TableColumn
            header={({ getSortLink, order, sort }) => (
              <MuiTableCell padding="none" style={{ width: '98%' }}>
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
            padding="none"
            cell={({ rowIndex }) => (
              <MuiTableCell padding="none">
                {list[rowIndex].name}
              </MuiTableCell>
            )}
          />
          <TableColumn
            header={() => <MuiTableCell style={{ width: '1%' }} />}
            cell={({ rowIndex }) => (
              <MuiTableCell classes={{ root: classes.actionsCell }} padding="none">
                <div className={classes.actions}>
                  <MuiIconButton aria-label={`Edit vendor ${list[rowIndex].name}`} to={`/vendors/${list[rowIndex]._id}`} component={Link}>
                    <MuiModeEditIcon />
                  </MuiIconButton>
                  <MuiIconButton aria-label={`Detele vendor ${list[rowIndex].name}`} onClick={this.handleOpenDeleteDialog(rowIndex)}>
                    <MuiDeleteIcon />
                  </MuiIconButton>
                </div>
              </MuiTableCell>
            )}
          />
        </Table>
        {selectedIndex !== undefined && (
          <MuiDialog open={open} onClose={this.handleRequestCloseDialog}>
            <MuiDialogTitle>Delete vendor?</MuiDialogTitle>
            <MuiDialogContent>
              <MuiTypography>
                You are about to delete vendor<b> {list[selectedIndex].name}</b>.
              <br />Are you sure?
            </MuiTypography>
            </MuiDialogContent>
            <MuiDialogActions>
              <MuiButton onClick={this.handleRequestCloseDialog} color="default">Cancel</MuiButton>
              <MuiButton onClick={this.handleDeleteVendor(list[selectedIndex]._id)} color="primary">Ok</MuiButton>
            </MuiDialogActions>
          </MuiDialog>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: fromResource.getCount(state, 'vendors'),
  list: fromEntities.getList(state, 'vendors', fromResource.getList(state, 'vendors')),
  isLoading: fromStatus.isLoading(state),
})

const mapDispatchToProps = dispatch => ({
  deleteVendorRequest: id => dispatch(resourceDeleteRequest('vendors', id)),
})

export default compose(
  withStyles(styleSheet, { name: 'VendorListPage' }),
  connect(mapStateToProps, mapDispatchToProps),
)(VendorListPage)
