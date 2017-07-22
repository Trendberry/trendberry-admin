import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { CategoryForm } from 'containers'

const CategoryUpdatePage = ({ id }) => <div><CategoryForm form="CategoryUpdateForm" id={id} /></div>

export default CategoryUpdatePage
