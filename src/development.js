import SimpleList from './SimpleList'
import { render } from 'react-dom'
import { api, header, listCoupons, transformDataOnFetch, pagination, actions } from '../__fixtures__/listApiResponse'
import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'

const props = {
  data: listCoupons,
  api, 
  header,
  transformDataOnFetch,
  pagination,
  actions
}

class List extends Component {
  render() {
    return (<SimpleList {...props} />)
  }
}

render(<MuiThemeProvider><List /></MuiThemeProvider>, document.getElementById('app'));
