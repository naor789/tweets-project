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
                                    tweet={tweet}
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