import SimpleList from './newlist/SimpleList'
import { render } from 'react-dom'
import { api, header, listCoupons, transformDataOnDisplay } from '../__fixtures__/listApiResponse'
import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'

const props = {
  data: listCoupons,
  api, 
  header,
  transformDataOnDisplay
}

class List extends Component {
  render() {
    return (<SimpleList {...props} />)
  }
}

render(<MuiThemeProvider><List /></MuiThemeProvider>, document.getElementById('app'));
