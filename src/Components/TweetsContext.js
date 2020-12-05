import React from 'react';

export const TweetsContext = React.createContext({
    tweets: [],
    newTweet: "",
    loading: false,
    userName: "",
    errorMessage: "",
});



