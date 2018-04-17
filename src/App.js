import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import User from './components/User';
import DefaultUsers from './DefaultUsers';
import Register from './components/RegisterUser';
import Books from './components/Books';

import './App.css';

class App extends Component {

    constructor() {
        super();
        this.addUser = this.addUser.bind(this);
        this.bitFlip = this.bitFlip.bind(this);

        this.state = {
            user: JSON.parse(localStorage.getItem('user')) || null,
            credentials: JSON.parse(localStorage.getItem('credentials')) || { ...DefaultUsers },

            loggedin: JSON.parse(localStorage.getItem('loggedin')) || false
        }
    }


    addUser(user) {
        const credentials = { ...this.state.credentials };
        const timestamp = Date.now();

        credentials[`user-${timestamp}`] = user;

        this.setState({ credentials }, () =>
            localStorage.setItem('credentials', JSON.stringify(this.state.credentials)));
    }

    bitFlip(LoggedUser) {
        //console.log(LoggedUser);
        //console.log('Bye ' + this.state.loggedin);
        if (LoggedUser != null) {
            this.setState({
                user: LoggedUser,
                loggedin: !this.state.loggedin
            }, () => {
                localStorage.setItem('user', JSON.stringify(this.state.user));
                localStorage.setItem('loggedin', JSON.stringify(this.state.loggedin));
            });
        }
        else {
            this.setState({
                user: null,
                loggedin: !this.state.loggedin
            }, () => {
                localStorage.setItem('user', null);
                localStorage.setItem('loggedin', JSON.stringify(!this.state.loggedin));
            });
            console.log('Logged out');

        }
    }

    render() {

        return (
            <div>
                <h1>
                    Challenge React Application
                </h1>
                {this.state.user === null ?
                    <div>
                        <LoginPage allUsers={this.state.credentials} userState={this.bitFlip} state={this.state} />
                        <br />
                        <Register addUser={this.addUser} />
                    </div> :
                    <div>
                        <User userName={this.state.user.name} userState={this.bitFlip} />
                        <Books />
                    </div>
                }

            </div>
        )
    }
}

export default App;
