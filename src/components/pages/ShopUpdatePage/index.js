import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { ShopForm } from 'containers'

const ShopUpdatePage = ({ id }) => <div><ShopForm id={id} /></div>

export default ShopUpdatePage
