import axios from 'axios';

const baseUrl = 'https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/';

export function getTweet(tweetId) {
    return axios.get(`${baseUrl}/tweet`);
}

export function createTweets(tweets) {
    return axios.post(`${baseUrl}tweet`, tweets);
}
