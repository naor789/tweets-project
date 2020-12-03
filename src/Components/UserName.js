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
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label htmlFor="userName">User Name</label>
                    <input type="text"
                        placeholder="Username"
                        id="userName"
                    value={this.state.userName}
                    onChange={(event) => this.handleChange(event)}
                />
                <button onClick={(event) => this.handleSubmit(event)}>save</button>
            </form>
        )

    }
}


export default UserName;
