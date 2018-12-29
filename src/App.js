import React, { Component } from 'react';
import MyDatePicker from './components/date_picker/MyDatePicker'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
           <MyDatePicker />
      </div>
    );
  }
}

export default App;
