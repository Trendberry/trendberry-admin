import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromResource, fromEntities } from 'store/selectors'
import { resourceListReadRequest, resourceDeleteRequest } from 'store/actions'
import { VendorListPage } from 'components'

class VendorListPageContainer extends Component {
  static get({ store, query }) {
    return store.dispatch(resourceListReadRequest('vendors', query))
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    deleteVendorRequest: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  state = {
    // anchorEl: undefined,
    open: false,
    selectedIndex: undefined,
  }

  handleOpenDeleteDialog = (rowIndex, event) => {
    this.setState({ open: true, selectedIndex: rowIndex })
  }

  handleDeleteVendor = (id) => {
    this.handleRequestCloseDialog()
    this.props.deleteVendorRequest(id)
    // .then((vendor) => {
    //   // console.log(vendor)
    // })
  }

  handleRequestCloseDialog = () => {
    this.setState({ open: false })
  }

  render() {
    return <VendorListPage {...this.props} selectedIndex={this.state.selectedIndex} open={this.state.open} openDeleteDialog={this.handleOpenDeleteDialog} deleteVendor={this.handleDeleteVendor} onRequestCloseDialog={this.handleRequestCloseDialog} />
  }
}

const mapStateToProps = state => ({
  list: fromEntities.getList(state, 'vendors', fromResource.getList(state, 'vendors')),
  count: fromResource.getCount(state, 'vendors'),
})

const mapDispatchToProps = dispatch => ({
  deleteVendorRequest: id => dispatch(resourceDeleteRequest('vendors', id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(VendorListPageContainer)
