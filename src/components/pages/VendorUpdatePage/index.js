import React from 'react'
import PropTypes from 'prop-types'

import { VendorForm } from 'containers'

const VendorUpdatePage = ({ id }) => <div><VendorForm form="VendorUpdateForm" id={id} /></div>

VendorUpdatePage.propTypes = {
  id: PropTypes.string.isRequired,
}

export default VendorUpdatePage
