import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromResource, fromCategory, fromEntities } from 'store/selectors'
import { resourceListReadRequest, resourceDeleteRequest } from 'store/actions'
import { CategoryListPage } from 'components'

class CategoryListPageContainer extends Component {
  static get({ store, query }) {
    return store.dispatch(resourceListReadRequest('categories', query))
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    deleteCategoryRequest: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  state = {
    anchorEl: undefined,
    open: false,
    selectedIndex: undefined,
  }

  handleOpenDeleteDialog = (rowIndex, event) => {
    this.setState({ open: true, anchorEl: event.currentTarget, selectedIndex: rowIndex });
  }

  handleDeleteCategory = id => {
    this.handleRequestCloseDialog()

    this.props.deleteCategoryRequest(id)
    .then((category) => {
      // console.log(category)
    })

  }

  handleRequestCloseDialog = () => {
    this.setState({ open: false })
  }

  render() {
    return <CategoryListPage {...this.props} selectedIndex={this.state.selectedIndex} open={this.state.open} openDeleteDialog={this.handleOpenDeleteDialog} deleteCategory={this.handleDeleteCategory} onRequestCloseDialog={this.handleRequestCloseDialog} />
  }

}

const mapStateToProps = (state) => {
  return ({
    list: fromEntities.getList(state, 'categories', fromResource.getList(state, 'categories')),
    count: fromResource.getCount(state, 'categories'),
  })
}

const mapDispatchToProps = (dispatch) => ({
  deleteCategoryRequest: (id) => dispatch(resourceDeleteRequest('categories', id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListPageContainer)
