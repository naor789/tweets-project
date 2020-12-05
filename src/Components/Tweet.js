import React from 'react';
import { TweetsConsumer } from './TweetsContext';

function Tweet(props) {

    return (
        <>
            <TweetsConsumer>
                <li className="tweet">
                    <span className="tweet-user"> {props.userName} </span>
                    <span className="tweet-date">{new Date(props.date).toLocaleString()} </span>
                    {/* <h1 className="h1-note">{props.content.username}</h1> */}
                    <p className="note-text">{props.content}</p>
                </li >
            </TweetsConsumer>
        </>)
}



export default Tweet;
