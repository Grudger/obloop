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
        this.bitFlip = this.bitFlip.bind(this);
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

    bitFlip(LoggedUser){
        console.log(LoggedUser);
        console.log('Bye ' + this.state.loggedin);
        this.setState({ 
            user : LoggedUser ,           
            loggedin : !this.state.loggedin            
        }, () => {
            localStorage.setItem('user', JSON.stringify(this.state.user));
            localStorage.setItem('loggedin', JSON.stringify(this.state.loggedin));
        });
    }

    render() {

        return (
            <div>
                <h1>
                    Challenge React Application
                </h1>
                {this.state.user === null ?
                    <div>
                        <LoginPage allUsers={this.state.credentials} userState={this.bitFlip} state = {this.state} />
                        <br />
                        <Register addUser={this.addUser} />
                    </div> : <User userName={this.state.user.name} />

                }           }

            </div>
        )
    }
}

export default App;
