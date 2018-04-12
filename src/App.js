import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import User from './components/User'
import './App.css';


class App extends Component {
  constructor(){
    super();
    //this.state = this.state.bind(this);
  }
  
  
    state = {
      user : {
        name : 'admin',
        pass : 'admin'
      }
    }
  

  render(){


    
    return(
      <div>
        <LoginPage />
        <br/>
        <User userName={this.state.user.name} pass={this.state.user.pass} />
      </div>
    )
  }
}

export default App;
