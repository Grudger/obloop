import React, { Component } from 'react';

class LoginPage extends Component {

    constructor() {
        super();
        this.doLogin = this.doLogin.bind(this);
    }

    doLogin(e) {
        e.preventDefault();
        //const credentials = this.props.allUsers;
        Object
            .keys(this.props.allUsers)
            .map(key => {
                console.log("Login Page line 16" + key);
                if (this.props.allUsers[key].name === this.name.value)
                    if (this.props.allUsers[key].pass === this.pass.value) {
                        console.log('Hello');
                        this.props.userState(key);
                        return key.name;
                    }
                return key.name;

            })
        this.LoginForm.reset();

    }

    render() {

        return (
            <div>
                <form ref={(input) => this.LoginForm = (input)} onSubmit={ e => this.doLogin(e)} >
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" ref={(input) => this.name = input} placeholder='User Name' id='userName' />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="pass">Password</label>
                        <input ref={(input) => this.pass = input} type="password" placeholder='Password' id='pass' />
                    </div>
                    <button type='submit' >Login</button>
                </form>
            </div>
        )
    }


}
export default LoginPage;