import React, { Component } from 'react';

class User extends Component {

    render() {

        return (
            <div>
                <label htmlFor="">User Name is {this.props.userName}</label>
                <br/>
                <label htmlFor="">Iis password is ******* ({this.props.pass}) </label>
            </div>
        )
    }


}
export default User;