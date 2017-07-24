import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromUser, fromEntities } from 'store/selectors'
import { userListReadRequest } from 'store/actions'
import { UserListPage } from 'components'

class UserListPageContainer extends Component {
  static get({ store, query }) {
    let limit = query._limit
    if (!limit) limit = 15

    const newQuery = {
      ...query,
      _limit: limit,
    }

    return new Promise((resolve, reject) => {
      store.dispatch(userListReadRequest(newQuery, resolve, reject))
    })
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    return <UserListPage {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return ({
    list: fromEntities.getList(state, 'user', fromUser.getList(state)),
    count: fromUser.getCount(state),
  })
}

export default connect(mapStateToProps)(UserListPageContainer)
