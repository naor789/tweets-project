import axios from 'axios';

const baseUrl = 'https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet';

export function getTweet(tweetId) {
    return axios.get(`${baseUrl}`);
}

export function createTweets(tweets) {
    return axios.post(`${baseUrl}`, tweets);
}
