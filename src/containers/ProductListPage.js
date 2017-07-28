import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromResource, fromEntities } from 'store/selectors'
import { resourceListReadRequest, resourceDeleteRequest } from 'store/actions'
import { ProductListPage } from 'components'

class ProductListPageContainer extends Component {
  static get({ store, query }) {
    return store.dispatch(resourceListReadRequest('products', query))
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    deleteProductRequest: PropTypes.func.isRequired,
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

  handleDeleteProduct = (id) => {
    this.handleRequestCloseDialog()
    this.props.deleteProductRequest(id)
    // .then((product) => {
    //   // console.log(product)
    // })
  }

  handleRequestCloseDialog = () => {
    this.setState({ open: false })
  }

  render() {
    return <ProductListPage {...this.props} selectedIndex={this.state.selectedIndex} open={this.state.open} openDeleteDialog={this.handleOpenDeleteDialog} deleteProduct={this.handleDeleteProduct} onRequestCloseDialog={this.handleRequestCloseDialog} />
  }
}

const mapStateToProps = state => ({
  list: fromEntities.getList(state, 'products', fromResource.getList(state, 'products')),
  count: fromResource.getCount(state, 'products'),
})

const mapDispatchToProps = dispatch => ({
  deleteProductRequest: id => dispatch(resourceDeleteRequest('products', id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPageContainer)
