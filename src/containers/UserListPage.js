import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromResource, fromEntities } from 'store/selectors'
import { resourceListReadRequest, resourceDeleteRequest } from 'store/actions'
import { UserListPage } from 'components'

class UserListPageContainer extends Component {
  static get({ store, query }) {
    return store.dispatch(resourceListReadRequest('users', query))
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    deleteUserRequest: PropTypes.func.isRequired,
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

  handleDeleteUser = (id) => {
    this.handleRequestCloseDialog()
    this.props.deleteUserRequest(id)
    // .then((user) => {
    //   // console.log(user)
    // })
  }

  handleRequestCloseDialog = () => {
    this.setState({ open: false })
  }

  render() {
    return <UserListPage {...this.props} selectedIndex={this.state.selectedIndex} open={this.state.open} openDeleteDialog={this.handleOpenDeleteDialog} deleteUser={this.handleDeleteUser} onRequestCloseDialog={this.handleRequestCloseDialog} />
  }
}

const mapStateToProps = state => ({
  list: fromEntities.getList(state, 'users', fromResource.getList(state, 'users')),
  count: fromResource.getCount(state, 'users'),
})

const mapDispatchToProps = dispatch => ({
  deleteUserRequest: id => dispatch(resourceDeleteRequest('users', id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListPageContainer)
