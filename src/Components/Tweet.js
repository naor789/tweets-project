import react from 'react';

function Tweet (props) {

    return (
        <>
            <li className="note">
                <span className="note-date">{props.content.date}</span>
                {/* <h1 className="h1-note">{props.content.username}</h1> */}
                <p className="note-text">{props.content.text}</p>
            </li >
        </>)
}



export default Tweet;
