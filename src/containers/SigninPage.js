import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { parse } from 'qs'
import { authSigninRequest, AUTH_USER_READ_REQUEST } from 'store/actions'
import { fromAuth } from 'store/selectors'
import { SigninPage } from 'components'

class SigninPageContainer extends Component {
  static post({ req, store }) {
    return new Promise((resolve, reject) => {
      store.dispatch(authSigninRequest(req.body, resolve, reject))
    })
  }

  static propTypes = {
    user: PropTypes.object,
    location: PropTypes.object.isRequired,
  }

  state = {
    redirectToReferrer: false,
  }

  componentWillMount() {
    if (this.props.user !== null) {
      this.setState({ redirectToReferrer: true })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      this.setState({ redirectToReferrer: true })
    }
  }

  render() {

    const { refferer } = parse(this.props.location.search.substring(1))
    const { from } = (refferer && { from: { pathname: refferer } } ) || this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect exact to={from} />
      )
    }

    return <SigninPage />
  }
}

const mapStateToProps = state => ({
  user: fromAuth.getUser(state, AUTH_USER_READ_REQUEST),
})

export default connect(mapStateToProps)(SigninPageContainer)
