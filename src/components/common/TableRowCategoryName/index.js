import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import { easing, duration } from 'material-ui/styles/transitions'

const styleSheet = createStyleSheet('Name', theme => ({
  ancestor: {
    color: theme.palette.text.secondary,
    display: 'inline-block',
    verticalAlign: 'top',
    '&:after': {
      background: theme.palette.text.divider,
      borderRadius: '50%',
      display: 'inline-block',
      content: '""',
      height: 8,
      marginRight: 8,
      verticalAlign: 'baseline',
      width: 8,
    },
    '& > span': {
      cursor: 'default',
      display: 'inline-block',
      maxWidth: 0,
      opacity: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      transition: `all ${duration.standard}ms ${easing.easeOut}`,
      verticalAlign: 'top',
    },
  },
  name: {
    display: 'inline-block',
    margin: -12,
    padding: 12,
    verticalAlign: 'top',
    '&:hover $ancestor span': {
      opacity: 1,
      marginRight: 8,
      maxWidth: 150,
    },
  },
  actions: {
    opacity: 0,
  },
  'tr:hover $actions': {
    opacity: 1,
  },
}))

const TableRowCategoryName = ({ item, classes }) => (
  <span className={classes.name}>
    {item.ancestors.map((ancestor) => {
      return <span key={ancestor._id} className={classes.ancestor}><span>{ancestor.name}</span></span>
    })}
    {item.name}
  </span>
)

TableRowCategoryName.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(TableRowCategoryName)
