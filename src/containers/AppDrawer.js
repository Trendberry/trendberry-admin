import React, { Component } from 'react'
import PropTypes from 'prop-types'
import canUseDom from 'dom-helpers/util/inDOM'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fromDevice } from 'store/selectors'
import { AppDrawer } from 'components'

class AppDrawerContainer extends Component {
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

  render() {
    const { device, ...other } = this.props
    const drawerProps = { ...other }
    if (this.state.width !== null) { drawerProps.width = this.state.width }

    return (<AppDrawer {...drawerProps} />)
  }
}

const mapStateToProps = state => ({
  device: fromDevice.getDevice(state),
})

export default withRouter(connect(mapStateToProps)(AppDrawerContainer))
