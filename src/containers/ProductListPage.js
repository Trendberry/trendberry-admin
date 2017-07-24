import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromProduct, fromEntities } from 'store/selectors'
import { productListReadRequest } from 'store/actions'
import { ProductListPage } from 'components'

class ProductListPageContainer extends Component {
  static get({ store, query }) {
    let limit = query._limit
    if (!limit) limit = 15

    const newQuery = {
      ...query,
      _limit: limit,
    }

    return new Promise((resolve, reject) => {
      store.dispatch(productListReadRequest(newQuery, resolve, reject))
    })
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    return <ProductListPage {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return ({
    list: fromEntities.getList(state, 'product', fromProduct.getList(state)),
    count: fromProduct.getCount(state),
  })
}

export default connect(mapStateToProps)(ProductListPageContainer)
