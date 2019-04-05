import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DossierContainer from './components/DossierContainer/DossierContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DossierContainer />
      </div>
    );
  }
}

export default App;
