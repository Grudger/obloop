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
    }


    state = {
        user: null,
        credentials: {
            ...DefaultUsers
        }
    }

    addUser(user) {
        const credentials = { ...this.state.credentials };
        const timestamp = Date.now();

        credentials[`user-${timestamp}`] = user;

        this.setState({ credentials });
    }

    render() {

        return (
            <div>
                <h1>
                    Challenge React Application
                </h1>
                {this.state.user === null ?
                    <div>
                        <LoginPage allUsers={this.state.credentials} />
                        <br />
                        <Register addUser={this.addUser} />
                    </div> : <User />

                }           }

            </div>
        )
    }
}

export default App;
