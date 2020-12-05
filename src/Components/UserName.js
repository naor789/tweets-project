import React from 'react';

class UserName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
        }
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            userName: value,

        });
    }


    handleSubmit = (event) => {
        event.preventDefault(event);
        const userName = this.state.userName
        this.props.onUserNameChange(userName)
        this.setState({
            userName: "",
        });
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)} className="username-form">
                <label htmlFor="userName" className="username-label" >User Name</label>
                <input type="text"
                    className="username"
                    placeholder="Username"
                    id="userName"
                    value={this.state.userName}
                    onChange={(event) => this.handleChange(event)}
                />
                <button onClick={(event) => this.handleSubmit(event)}
                    className="btn btn-primary username-button" >save</button>
            </form>
        )

    }
}


export default UserName;
