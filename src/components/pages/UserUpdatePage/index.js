import React from 'react'
import PropTypes from 'prop-types'

import { UserForm } from 'containers'

const UserUpdatePage = ({ id }) => <div><UserForm form="UserUpdateForm" id={id} /></div>

UserUpdatePage.propTypes = {
  id: PropTypes.string.isRequired,
}

export default UserUpdatePage
