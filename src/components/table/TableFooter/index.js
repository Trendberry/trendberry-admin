import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { parse, stringify } from 'qs'
import Link from 'react-router-dom/Link'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import { withRouter } from 'react-router'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import IconKeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft'
import IconKeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight'

import { TableFooterMenu } from 'containers'

function toInteger(v) {
  return isNaN(v) ? 0 : parseInt(v, 10)
}

function calculateTotalPages(totalItemsInCollection, itemsPerPage) {
  const e = toInteger(totalItemsInCollection)
  const p = toInteger(itemsPerPage)
  return Math.ceil(e / p)
}

function pageLinkPath(location, currentPageNumber) {
  const query = parse(location.search.substr(1))
  currentPageNumber === 1 ? delete query._page : query._page = currentPageNumber

  return {
    ...location,
    search: `?${stringify({
      ...query,
    })}`,
  }
}

const styleSheet = createStyleSheet('TableFooter', theme => ({
  toolbar: {
    height: 56,
    paddingRight: 2,
  },
  spacer: { flex: '1 1 100%' },
  pagination: {
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    '& > *': {
      verticalAlign: 'top',
    },
  },
  text: {
    display: 'inline-block',
    lineHeight: '24px',
    padding: '12px 20px',
  },
  label: {
    marginRight: 8,
  },
  title: { flex: '0 0 auto' },
}))

class TableFooter extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    limitOptions: PropTypes.arrayOf(PropTypes.number),
    location: PropTypes.object.isRequired,
  }

  static defaultProps = {
    limitOptions: [10, 20, 50],
  }

  startIndex = (limit, pageNumber) => {
    return (limit * (pageNumber - 1)) + 1
  }

  endIndex = (limit, pageNumber, count) => {
    return (count >= limit * pageNumber) ? (limit * pageNumber) : count
  }

  hasReversePageLink = pageNumber => ((pageNumber - 1) > 0)
  hasForwardPageLink = (pageNumber, totalPages) => ((pageNumber + 1) <= totalPages)

  reversePageLinkItem = (pageNumber) => {
    const { location } = this.props
    const disabled = !this.hasReversePageLink(pageNumber)
    const n = pageNumber - 1
    return (
      <IconButton
        component={disabled ? 'span' : Link}
        to={pageLinkPath(location, n)}
        disabled={disabled}
      >
        <IconKeyboardArrowLeft />
      </IconButton>
    )
  }

  forwardPageLinkItem = (pageNumber, totalPages) => {
    const { location } = this.props
    const disabled = !this.hasForwardPageLink(pageNumber, totalPages)
    const n = pageNumber + 1
    return (
      <IconButton
        component={disabled ? 'span' : Link}
        to={pageLinkPath(location, n)}
        disabled={disabled}
      >
        <IconKeyboardArrowRight />
      </IconButton>
    )
  }

  limitLink = (limit) => {
    const { limitOptions, location } = this.props
    const query = parse(location.search.substr(1))
    limit === limitOptions[0] ? delete query._limit : query._limit = limit
    delete query._page

    return {
      ...location,
      search: `?${stringify({
        ...query,
      })}`,
    }
  }

  render() {
    const { classes, count, limitOptions, location } = this.props

    const query = parse(location.search.substr(1))
    const limit = toInteger(query._limit) || limitOptions[0]
    const page = toInteger(query._page) || 1

    const totalPages = toInteger(calculateTotalPages(count, limit))

    return (
      <Toolbar classes={{ root: classes.toolbar }}>
        <div className={classes.spacer} />
        <div className={classes.pagination}>
          <Typography className={classNames(classes.text, classes.label)} type="caption">Rows per page</Typography>
          <TableFooterMenu limit={limit} limitLink={this.limitLink} limitOptions={limitOptions} />
          <Typography className={classes.text} type="caption">{count && `${this.startIndex(limit, page)}-${this.endIndex(limit, page, count)}`} of {count}</Typography>

          {this.reversePageLinkItem(page, totalPages)}
          {this.forwardPageLinkItem(page, totalPages)}

        </div>
      </Toolbar>
    )
  }
}

export default withRouter(withStyles(styleSheet)(TableFooter))
