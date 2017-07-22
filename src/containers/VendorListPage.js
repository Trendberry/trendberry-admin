import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromVendor, fromEntities } from 'store/selectors'
import { vendorListReadRequest } from 'store/actions'
import { VendorListPage } from 'components'

class VendorListPageContainer extends Component {
  static get({ store, query }) {
    let limit = query._limit
    if (!limit) limit = 15

    const newQuery = {
      ...query,
      _limit: limit,
    }

    return new Promise((resolve, reject) => {
      store.dispatch(vendorListReadRequest(newQuery, resolve, reject))
    })
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    return <VendorListPage {...this.props} />
  }

}

const mapStateToProps = (state) => {
  return ({
    list: fromEntities.getList(state, 'vendor', fromVendor.getList(state)),
    count: fromVendor.getCount(state),
  })
}

export default connect(mapStateToProps)(VendorListPageContainer)
