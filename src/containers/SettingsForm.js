import React, { Component } from 'react'
import PropTypes from 'prop-types'
import canUseDom from 'dom-helpers/util/inDOM'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import { notificationSend, resourceCreateRequest, resourceUpdateRequest } from 'store/actions'
import { fromForm, fromEntities } from 'store/selectors'
import { createValidator, required } from 'services/validation'
import { fromDevice } from 'store/selectors'

import { SettingsForm } from 'components'

class SettingsFormContainer extends Component {
  static propTypes = {
    device: PropTypes.object,
  }

  static defaultProps = {
    device: null,
  }

  constructor(props) {
    super(props)

    let width = null
    if (props.device) {
      if (props.device.type === 'desktop') width = 'lg'
      if (props.device.type === 'tablet') width = 'sm'
      if (props.device.type === 'phone') width = 'xs'
    }

    this.state = {
      tabIindex: 0,
      width,
    }
  }

  componentWillMount() {
    if (canUseDom) {
      setTimeout(() =>
        this.setState({
          width: null,
        }), 167
      )
    }
  }

  handleTabChange = (event, tabIindex) => {
    this.setState({ tabIindex })
  }

  render() {
    const { device, ...other } = this.props
    const props = { ...other }
    if (this.state.width !== null) { props.width = this.state.width }

    return (
      <SettingsForm
        tabIindex={this.state.tabIindex}
        handleTabChange={this.handleTabChange}
        {...props}
      />
    )
  }
}

const onSubmit = (values, dispatch) => {
  console.log('sent')
}

// const validate = createValidator({
//   name: [required],
// })

const mapStateToProps = (state, { id }) => ({
  device: fromDevice.getDevice(state),
  initialValues: {
    _csrf: fromForm.getCsrfToken(state),
  },
})

export const config = {
  fields: [
    'name',
  ],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit,
  // validate,
}

export default connect(mapStateToProps)(reduxForm(config)(SettingsFormContainer))
