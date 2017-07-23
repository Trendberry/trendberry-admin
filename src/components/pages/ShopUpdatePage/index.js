import React from 'react'
import PropTypes from 'prop-types'
import { ShopForm } from 'containers'

const ShopUpdatePage = ({ id }) => <div><ShopForm id={id} /></div>

ShopUpdatePage.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ShopUpdatePage
