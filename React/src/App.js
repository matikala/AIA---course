import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import ListComponent from './components/ListComponent/ListComponent'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div className="app">
        <HeaderComponent title="Paintings" />
        <ListComponent />
      </div>
    );
  }
}

export default App;
