import React, { Component } from 'react'
import Head from './components/Head'
import Body from './components/Body'

import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <Body/>
      </div>
    )
  }
}

export default App
