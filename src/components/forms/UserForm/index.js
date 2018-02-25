import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Form, Field } from 'redux-form'
import MuiButton from 'material-ui/Button'

import Grid from 'material-ui/Grid'
import MuiPaper from 'material-ui/Paper'
import MuiToolbar from 'material-ui/Toolbar'
import MuiTypography from 'material-ui/Typography'
import { TextField } from 'components'

const styleSheet = {
  content: {
    padding: '0 24px 12px',
  },
  actions: {
    padding: '8px 12px',
  },
}

const UserForm = ({ id, classes, handleSubmit, submitting }) => {
  return (
    <MuiPaper component={Form} onSubmit={handleSubmit} method="POST">
      <MuiToolbar>
        <MuiTypography variant="headline">{id ? 'Update' : 'Create'} user</MuiTypography>
      </MuiToolbar>
      <div className={classes.content}>
        {id && <Field name="_id" type="hidden" component="input" />}
        <Field name="_csrf" type="hidden" component="input" />
        <Grid container spacing={24}>
          <Grid item sm={8}>
            <Field name="displayName" label="Display name" type="text" component={TextField} />
            <Field name="firstname" label="First name" type="text" component={TextField} />
            <Field name="lastName" label="Last name" type="text" component={TextField} />
            <Field name="email" label="Email" type="уьфшд" component={TextField} />
          </Grid>
          <Grid item sm={4} />
        </Grid>
      </div>
      <div className={classes.actions}>
        <MuiButton type="submit" disabled={submitting}>{id ? 'Update' : 'Create'}</MuiButton>
      </div>
    </MuiPaper>
  )
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
  submitting: PropTypes.bool,
}

UserForm.defaultProps = {
  id: null,
}


export default withStyles(styleSheet, { name: 'UserForm' })(UserForm)
