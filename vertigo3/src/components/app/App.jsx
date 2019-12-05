import React, { Component } from 'react';
import './App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../header/header';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <CssBaseline />
        <div className='App'>
          <Header></Header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
