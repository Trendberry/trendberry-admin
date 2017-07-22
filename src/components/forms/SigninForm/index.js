import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card'
import Button from 'material-ui/Button'
import LinearProgress from 'material-ui/Progress/LinearProgress'
import { withStyles, createStyleSheet } from 'material-ui/styles'

import { TextField } from 'components'

const styleSheet = createStyleSheet('SigninForm', {
  cardActions: {
    boxSizing: 'border-box',
  },
  cardHeader: {
    paddingBottom: 0,
  },
  cardContent: {
    paddingTop: 0,
  },
  linearProgress: {
    borderRadius: '2px 2px 0 0',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 2,
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.38)',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
})

const SigninForm = ({ classes, handleSubmit, submitting }) => (
  <form name="SigninForm" method="POST" onSubmit={handleSubmit}>
    <Card>
      {submitting && <LinearProgress className={classes.linearProgress} />}
      {submitting && <div className={classes.overlay} />}
      <CardHeader className={classes.cardHeader} title="Sign in" subheader="wiht your TrendBerry account" />
      <CardContent className={classes.cardContent}>
        <Field name="usernameOrEmail" label="Email or login" type="text" component={TextField} required />
        <Field name="password" label="Password" type="password" component={TextField} required />
        <Field name="_csrf" type="hidden" component="input" />
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button color="primary" component={props => <button type="submit" {...props} />} disabled={submitting}>Sign in</Button>
      </CardActions>
    </Card>
  </form>
)

SigninForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default withStyles(styleSheet)(SigninForm)
