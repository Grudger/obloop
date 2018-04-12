import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import User from './components/User'
import DefaultUsers from './DefaultUsers';
import './App.css';


class App extends Component {

    constructor() {
        super();
        //this.state = this.state.bind(this);
    }


    state = {
        user: null,
        credentials: {
            ...DefaultUsers
        }
    }

    
    render() {

        return (
            <div>
                <h1>
                    Challenge React Application
                </h1>
                {this.state.user === null ?
                <LoginPage /> : <User />
            }           
                
            </div>
        )
    }
}

export default App;
