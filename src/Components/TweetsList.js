import React from 'react';
import Tweet from "./Tweet";

const TweetsList = (props) => {
    return (
        <ul >
            {props.tweets.map((tweet) => {
                return (
                    <Tweet key={tweet.id} content={tweet}       
                    />
                )
            }
            )}
        </ul >
    );
}



export default TweetsList;