import React from 'react'
import PropTypes from 'prop-types'

import { ProductForm } from 'containers'

const ProductUpdatePage = ({ id }) => <div><ProductForm form="ProductUpdateForm" id={id} /></div>

ProductUpdatePage.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ProductUpdatePage
