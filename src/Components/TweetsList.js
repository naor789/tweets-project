import React from 'react';
import Tweet from "./Tweet";

const TweetsList = (props) => {
    return (
        <ul className="tweet-list" >
            {props.tweets.map((tweet) => {
                return (
                    <Tweet
                        key={tweet.id} date={tweet.date} userName={tweet.userName} content={tweet.content}
                        // key={tweet.id} content={tweet}       
                    />
                )
            }
            )}
        </ul >
    );
}



export default TweetsList;