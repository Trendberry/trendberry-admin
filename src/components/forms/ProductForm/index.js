import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Form, Field } from 'redux-form'
import MuiButton from 'material-ui/Button'

import Grid from 'material-ui/Grid'
import MuiPaper from 'material-ui/Paper'
import MuiToolbar from 'material-ui/Toolbar'
import MuiTypography from 'material-ui/Typography'
import { DraftRichEditor, TextField } from 'components'

const styleSheet = {
  content: {
    padding: '0 24px 12px',
  },
  actions: {
    padding: '8px 12px',
  },
}

const ProductForm = ({ id, classes, handleSubmit, submitting }) => {
  return (
    <MuiPaper component={Form} onSubmit={handleSubmit} method="POST">
      <MuiToolbar>
        <MuiTypography type="headline">{id ? 'Update' : 'Create'} product</MuiTypography>
      </MuiToolbar>
      <div className={classes.content}>
        {id && <Field name="_id" type="hidden" component="input" />}
        <Field name="_csrf" type="hidden" component="input" />
        <Grid container spacing={24}>
          <Grid item sm={8}>
            <Field name="name" label="Name" type="text" component={TextField} required />
            <Field name="description" label="Description" type="textarea" component={TextField} />
            <DraftRichEditor />
          </Grid>
          <Grid item sm={4}>
            <Field name="slug" type="text" label="Slug" component={TextField} />
            <Field name="meta.title" type="text" label="Meta Title" component={TextField} />
            <Field name="meta.description" label="Meta Description" component={TextField} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.actions}>
        <MuiButton type="submit" disabled={submitting}>{id ? 'Update' : 'Create'}</MuiButton>
      </div>
    </MuiPaper>
  )
}

ProductForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
  submitting: PropTypes.bool,
}

ProductForm.defaultProps = {
  id: null,
}


export default withStyles(styleSheet, { name: 'ProductForm' })(ProductForm)
