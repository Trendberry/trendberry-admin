import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { parse, stringify } from 'qs'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import IconButton from 'material-ui/IconButton'
import Input from 'material-ui/Input/Input'
import IconSearch from 'material-ui-icons/Search'
import IconClose from 'material-ui-icons/Close'

const styleSheet = (theme) => ({
  root: {
    display: 'inline-flex',

    // flexDirection: 'row',
    // flexWrap: 'nowrap',
    // justifyContent: 'flex-start',
    // alignContent: 'stretch',
    alignItems: 'center',
  },
  field: {
    height: 48,
    overflow: 'hidden',
    padding: '8px 0 7px',
    transition: `width ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
    width: 0,
    '&:hover': {
      paddingBottom: 6,
    },
  },
  open: {
    width: 240,
  },
  input: {
    display: 'block',
    // margin: '0 !important',
    width: 240,
    // '&:hover': {
    //   margin: '0 !important',
    // },
  },
  button: {
    verticalAlign: 'middle',
  },
  close: {
    display: 'none',
    marginLeft: -32,
    animation: `search-widget-appear ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  },
  visible: {
    display: 'inline-flex',
  },
  '@keyframes search-widget-appear': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
})

let searchTimeout

class SearchWidget extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    const { q } = parse(props.location.search.substr(1))
    const searchString = q || ''

    this.handleRequestOpen = this.handleRequestOpen.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)

    this.state = {
      open: searchString.length > 0,
      q: searchString,
    }
  }

  handleSearch = (value, clear) => {
    const { history, location } = this.props
    const query = parse(location.search.substr(1))
    delete query._page
    if (clear) delete query.q
    else query.q = value

    history.push({
      ...location,
      search: `?${stringify({
        ...query,
      })}`,
    })
  }

  handleRequestOpen = () => {
    this.state.open === false && this.searchInput.input.focus()
    this.setState({ open: true })
  }

  handleRequestClose = () => {
    clearTimeout(searchTimeout)
    this.setState({ open: false, q: '' }, () => {
      this.handleSearch('', true)
    })
  }

  handleInputChange = (event) => {
    const { value } = event.target
    this.setState({ q: value }, () => {
      clearTimeout(searchTimeout)
      if (value.length && value.length < 3) return
      searchTimeout = setTimeout(() => this.handleSearch(value), 500)
    })
  }

  handleInputBlur = (event) => {
    const { value } = event.target
    if (value === '') {
      this.setState({ open: false })
    }
  }

  render() {
    const { classes } = this.props
    const { open, q } = this.state

    return (
      <div className={classes.root}>
        <IconButton className={classes.button} onClick={this.handleRequestOpen}>
          <IconSearch />
        </IconButton>
        <div className={classNames(classes.field, { [classes.open]: open })}>
          <Input
            className={classes.input}
            value={q}
            placeholder="Search"
            innerRef={(input) => { this.searchInput = input }}
            onBlur={event => this.handleInputBlur(event)}
            onChange={event => this.handleInputChange(event)}
          />
        </div>
        <IconButton className={classNames(classes.button, classes.close, { [classes.visible]: open })} onClick={this.handleRequestClose}>
          <IconClose />
        </IconButton>
      </div>
    )
  }
}

export default withRouter(withStyles(styleSheet, { name: 'SearchWidget' })(SearchWidget))
