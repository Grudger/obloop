import React, { Component } from 'react';

class User extends Component {

    render() {

        return (
            <div>
                <button onClick={e => { this.props.userState(null) }}>Logout</button>
                <br />
                <p>User Name is {this.props.userName} </p>
                <p>is password is ******* ({this.props.pass})</p>
            </div>
        )
    }


}
export default User;