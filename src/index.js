import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import App from './components/App.js'

const theme = createMuiTheme({
  typography: {
    fontSize: 14
  }
})

render((
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
