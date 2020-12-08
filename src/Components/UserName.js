
import React, { useState } from "react";

function UserName(props) {
    const [username, setUsername] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onUserNameChange(username);
    };


    return (
        
        <form onSubmit={handleSubmit} className="username-form">
            <label htmlFor="userName" className="username-label">
                User Name
			</label>
            <input
                type="text"
                className="username"
                placeholder="Username"
                id="userName"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <button
                onClick={handleSubmit}
                className="btn btn-primary username-button "
            >
                save
			</button>
        </form>
    );
}
export default UserName;



