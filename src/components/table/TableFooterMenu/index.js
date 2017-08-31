import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import { withStyles } from 'material-ui/styles'
import MuiMenu, { MenuItem as MuiMenuItem } from 'material-ui/Menu'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import IconArrowDropDown from 'material-ui-icons/ArrowDropDown'

const styleSheet = {
  root: {
    display: 'inline-block',
  },
  pages: {
    position: 'absolute',
    right: 36,
  },
}

const TableFooterMenu = (props) => {
  const {
    anchorEl,
    classes,
    handleRequestClose,
    handleRequestOpen,
    limit,
    limitLink,
    limitOptions,
    open,
  } = props

  return (
    <div className={classes.root}>
      <IconButton onClick={handleRequestOpen}>
        <Typography
          classes={{
            root: classes.pages,
          }}
          type="caption"
        >
          {limit || limitOptions[0]}
        </Typography>
        <IconArrowDropDown />
      </IconButton>
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onRequestClose={handleRequestClose}
      >
        {limitOptions.map((option) => {
          return (
            <MuiMenuItem
              component={Link}
              key={option}
              replace
              selected={option === limit}
              to={limitLink(option)}
              onClick={handleRequestClose}
            >
              {option}
            </MuiMenuItem>
          )
        })}
      </MuiMenu>
    </div>
  )
}

TableFooterMenu.propTypes = {
  anchorEl: PropTypes.any,
  classes: PropTypes.object.isRequired,
  handleRequestClose: PropTypes.func.isRequired,
  handleRequestOpen: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  limitLink: PropTypes.func.isRequired,
  limitOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
  open: PropTypes.bool.isRequired,
}

export default withStyles(styleSheet, { name: 'TableFooterMenu' })(TableFooterMenu)
