import React, { Component } from 'react';

class LoginPage extends Component {

    render() {

        return (
            <div>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" placeholder='User Name' id='userName' />
                </div>
                <br />
                <div>
                    <label htmlFor="pass">Password</label>
                    <input type="password" placeholder='Password' id='pass' />
                </div>
            </div>
        )
    }


}
export default LoginPage;