import React from 'react';

const TweetsContext = React.createContext();

const TweetsProvider = TweetsContext.Provider;
const TweetsConsumer = TweetsContext.Consumer;


export {TweetsProvider , TweetsConsumer }