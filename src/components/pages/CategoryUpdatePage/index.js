import React from 'react'
import PropTypes from 'prop-types'

import { CategoryForm } from 'containers'

const CategoryUpdatePage = ({ id }) => <div><CategoryForm form="CategoryUpdateForm" id={id} /></div>

CategoryUpdatePage.propTypes = {
  id: PropTypes.string.isRequired,
}

export default CategoryUpdatePage
