import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import User from './components/User'
import DefaultUsers from './DefaultUsers';
import Register from './components/RegisterUser'
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.addUser = this.addUser.bind(this);
        this.bitFlip = this.addUser.bind(this);
    }


    state = {
        user: null,
        credentials: {
            ...DefaultUsers
        },
        loggedin : false
    }

    addUser(user) {
        const credentials = { ...this.state.credentials };
        const timestamp = Date.now();

        credentials[`user-${timestamp}`] = user;

        this.setState({ credentials });
    }

    bitFlip(loginUser){
        console.log(loginUser);
        console.log('Bye' + this.state.loggedin);
        
        this.setState({ 
            user: this.state.credentials[loginUser],
            loggedin : !this.state.loggedin            
            });
        
        //this.setState.loggedin(temp);
        
    }

    render() {

        return (
            <div>
                <h1>
                    Challenge React Application
                </h1>
                {this.state.user === null ?
                    <div>
                        <LoginPage allUsers={this.state.credentials} userState={this.bitFlip} />
                        <br />
                        <Register addUser={this.addUser} />
                    </div> : <User />

                }           }

            </div>
        )
    }
}

export default App;
