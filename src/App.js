import React, { Component } from 'react'
import DetailForm from './components/DetailForm';
import GetData from './components/GetData'
import './App.css';

export class App extends Component {

  render() {

    return (

      <div className="main">
        <div className="header">
          <h2 id="heading">MEME STREAM</h2>
        </div>
        <DetailForm />
        <GetData />
      </div>
      
    )

  }
  
}

export default App
