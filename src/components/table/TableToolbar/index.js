import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import MuiToolbar from 'material-ui/Toolbar'
import MuiTypography from 'material-ui/Typography'

const styleSheet = theme => ({
  root: {
    paddingRight: 2,
  },
  highlight: theme.palette.type === 'light'
    ? {
      color: theme.palette.accent[500],
      backgroundColor: theme.palette.accent[50],
    }
    : {
      color: theme.palette.accent.A100,
      backgroundColor: theme.palette.accent.A700,
    },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
    display: 'inline-flex',
  },
  title: {
    flex: '0 0 auto',
  },
})

const TableToolbar = (props) => {
  const { content, contentAlt, numSelected, classes, title } = props

  return (
    <MuiToolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0
          ? <MuiTypography color="inherit" type="subheading">{numSelected} selected</MuiTypography>
          : <MuiTypography type="headline">{title}</MuiTypography>}
      </div>
      <div className={classes.spacer} />
      {numSelected > 0 ?
        (contentAlt && React.cloneElement(contentAlt, { className: classes.actions })) :
        (content && React.cloneElement(content, { className: classes.actions }))
      }
    </MuiToolbar>
  )
}

TableToolbar.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
  content: PropTypes.any,
  contentAlt: PropTypes.any,
  numSelected: PropTypes.number.isRequired,
}

TableToolbar.defaultProps = {
  title: null,
  content: null,
  contentAlt: null,
}

export default withStyles(styleSheet, { name: 'TableToolbar' })(TableToolbar)
