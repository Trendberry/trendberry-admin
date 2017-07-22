import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import MuiToolbar from 'material-ui/Toolbar'
import MuiTypography from 'material-ui/Typography'
import MuiIconButton from 'material-ui/IconButton'
import MuiDeleteIcon from 'material-ui-icons/Delete'
import MuiFilterListIcon from 'material-ui-icons/FilterList'

const styleSheet = createStyleSheet('TableToolbar', theme => ({
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
  },
  title: {
    flex: '0 0 auto',
  },
}))

const TableToolbar = (props) => {
  const { numSelected, classes, title } = props

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
      <div className={classes.actions}>
        {numSelected > 0
          ? <MuiIconButton aria-label="Delete">
            <MuiDeleteIcon />
          </MuiIconButton>
          : (
            <MuiIconButton aria-label="Filter list">
              <MuiFilterListIcon />
            </MuiIconButton>
          )}
      </div>
    </MuiToolbar>
  )
}

TableToolbar.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
}

TableToolbar.defaultProps = {
  title: null,
}

export default withStyles(styleSheet)(TableToolbar)
