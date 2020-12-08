import React from 'react';


function Tweet(props) {
    const { date, userName, content } = props.tweet.tweet;
    return (
        <>
            <div
                className="tweet container shadow pl-3 pr-3 pt-2 pb-2 mb-2 ml-2  rounded mx-auto  w-50 bg-dark  "
                style={{ fontSize: "14px" }}
            >
                <div className="row text-muted">
                    <div className="col ">
                        <p>{userName}</p>
                    </div>
                    <div className="col-10 text-right">
                        <p>{new Date(date).toString()}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-white">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
          

        </>)
}



export default Tweet;
