import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import { withRouter } from 'react-router'
import { parse, stringify } from 'qs'
import {
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
  TableCell as MuiTableCell,
} from 'material-ui/Table'

const styleSheet = createStyleSheet('TableHead', {
  '@global': {
    th: {
      fontWeight: 500,
      '& a': {
        color: 'inherit',
      },
    },
  },
  head: {
    height: 56,
  },
})

class TableHead extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.array.isRequired,
    handleSelectAllClick: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    order: PropTypes.string,
    sort: PropTypes.string,
  }

  getSortLink = (key) => {
    const { location } = this.props
    const query = parse(location.search.substr(1))
    const order = (query._order && query._order.toLowerCase()) || 'desc'
    const orderParam = order === 'asc' ? 'DESC' : 'ASC'

    return {
      pathname: location.pathname,
      search: `?${stringify({
        ...query,
        _order: orderParam,
        _sort: key,
      })}`,
    }
  }

  render() {
    const { children, classes, handleSelectAllClick, location, order, sort } = this.props
    const query = parse(location.search.substr(1))
    const sortParam = query._sort || sort
    const orderParam = (query._order && query._order.toLowerCase()) || order

    return (
      <MuiTableHead>
        <MuiTableRow
          classes={{
            root: classes.head,
          }}
        >
          {React.Children.map(children, (child) => {
            if (child.type.muiName === 'TableColumn') {
              const { cell, header, ...other } = child.props

              const headerProps = {
                ...other,
                classes,
                getSortLink: this.getSortLink,
                handleSelectAllClick,
                order: orderParam,
                sort: sortParam,
              }

              let content
              if (React.isValidElement(header)) {
                content = React.cloneElement(header, headerProps)
              } else if (typeof header === 'function') {
                content = header(headerProps)
              } else {
                content = (
                  <MuiTableCell {...headerProps}>
                    {header}
                  </MuiTableCell>
                )
              }
              return content
            }
            return null
          })}
        </MuiTableRow>
      </MuiTableHead>
    )
  }
}

export default withRouter(withStyles(styleSheet)(TableHead))
