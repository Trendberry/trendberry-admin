import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromResource, fromEntities } from 'store/selectors'
import { resourceListReadRequest, resourceDeleteRequest } from 'store/actions'
import { ShopListPage } from 'components'

class ShopListPageContainer extends Component {
  static get({ store, query }) {
    return store.dispatch(resourceListReadRequest('shops', query))
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    deleteShopRequest: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  state = {
    anchorEl: undefined,
    open: false,
    selectedIndex: undefined,
  }

  handleOpenDeleteDialog = (rowIndex, event) => {
    this.setState({ open: true, anchorEl: event.currentTarget, selectedIndex: rowIndex })
  }

  handleDeleteShop = (id) => {
    this.handleRequestCloseDialog()
    this.props.deleteShopRequest(id)
    // .then((shop) => {
    //   // console.log(shop)
    // })
  }

  handleRequestCloseDialog = () => {
    this.setState({ open: false })
  }

  render() {
    return <ShopListPage {...this.props} selectedIndex={this.state.selectedIndex} open={this.state.open} openDeleteDialog={this.handleOpenDeleteDialog} deleteShop={this.handleDeleteShop} onRequestCloseDialog={this.handleRequestCloseDialog} />
  }
}

const mapStateToProps = state => ({
  list: fromEntities.getList(state, 'shops', fromResource.getList(state, 'shops')),
  count: fromResource.getCount(state, 'shops'),
})

const mapDispatchToProps = dispatch => ({
  deleteShopRequest: id => dispatch(resourceDeleteRequest('shops', id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopListPageContainer)
