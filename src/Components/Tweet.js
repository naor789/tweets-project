import React from 'react';

function Tweet (props) {

    return (
        <>
            <li className="tweet">
                <span className="note-date">{new Date(props.date).toLocaleString()} {props.userName}</span>
                {/* <h1 className="h1-note">{props.content.username}</h1> */}
                <p className="note-text">{props.content}</p>
            </li >
        </>)
}



export default Tweet;
