import React, { Component } from 'react'
import './App.css';
import ParentComp from './components/ParentComp';
import PureComp from './PureComp';
class App extends Component {
  render() {
    return (
      <div className="App">
       <ParentComp></ParentComp>
      </div>
    )
  }
}

export default App
