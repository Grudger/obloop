import React, { Component } from 'react';

class LoginPage extends Component {

    constructor() {
        super();
        this.doLogin = this.doLogin.bind(this);
    }

    doLogin(e) {
        e.preventDefault();
        //const credentials = this.props.allUsers;

    }

    render() {

        return (
            <div>
                <h2>Login Here</h2>
                <form ref={(input) => this.loginInput = (input)} onSubmit={ e => this.doLogin = (e) } >
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" placeholder='User Name' id='userName' />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="pass">Password</label>
                        <input type="password" placeholder='Password' id='pass' />
                    </div>
                    <button type='submit' >Login</button>
                </form>
            </div>
        )
    }


}
export default LoginPage;