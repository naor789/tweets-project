import React from 'react';
import Tweet from "./Tweet";
import { TweetsContext } from './TweetsContext';

const TweetsList = (props) => {
    return (
        <TweetsContext.Consumer>
            {(context) => {
                return (

                    <ul className="tweet-list">
                        {context.tweets.map((tweet) => {
                            return (

                                <Tweet
                                    key={tweet.id}
                                    date={tweet.date}
                                    userName={tweet.userName}
                                    content={tweet.content}
                                />

                            );
                        })}

                    </ul >
                );
            }}
        </TweetsContext.Consumer>
    );
}




export default TweetsList;