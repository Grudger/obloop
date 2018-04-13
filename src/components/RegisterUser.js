import React, { Component } from 'react';

class RegisterUser extends Component {

    createUser(event) {
        event.preventDefault();
        console.log('Adding user');
        const user = {
            name: this.name.value,
            pass: this.pass.value,
            email: this.email.value
        }
        this.props.addUser(user);
        this.userForm.reset();
    }

    render() {

        return (
            <div>
                <h3>Register</h3>

                <form ref={(input) => this.userForm = input} className="user-edit" onSubmit={(e) => this.createUser(e)}>
                    <label htmlFor="userName">Enter the new user's name</label>
                    <input ref={(input) => this.name = input} type="text" placeholder="User Name" />
                    <label htmlFor="pass">Enter email address</label>
                    <input ref={(input) => this.email = input} type="text" placeholder="E-Mail" />
                    <label htmlFor="pass">Enter password</label>
                    <input ref={(input) => this.pass = input} type="password" placeholder="Password" />
                    <button type="submit">+ Add User</button>
                </form>
            </div>
        )
    }


}
export default RegisterUser;