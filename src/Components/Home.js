import React, { useState, useEffect } from 'react';
import '../App.css';
import TweetsList from '../Components/TweetsList';
import TweetsForm from '../Components/TweetsForm';
import UserName from '../Components/UserName';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { AuthProvider , useAuth} from '../context/AuthContext';
import { TweetsContext } from '../Components/TweetsContext'
import { database } from "../Components/firebase"
import { Navbar, Nav } from "react-bootstrap"


export default function Home() {
    const [tweets, setTweets] = useState([]);
    const [userName, setUserName] = useState("");
    const { logout } = useAuth();
    const history = useHistory()

    async function handleLogOut() {
        try {
            await logout();
            history.push("/");
        } catch { }
    }


    function handleUserNameChange(userName) {
        setUserName(userName);
    }

    useEffect(() => {
        const loadUserData =
            database
                .collection("Tweetscollection")
                .onSnapshot((querySnapshot) => {
                    const tweets = [];
                    querySnapshot.forEach((doc) => {
                        tweets.push(Object.assign(doc.data(), { id: doc.id }));
                    });
                    tweets.sort(function (a, b) {
                        return new Date(b.tweet.date).getTime() - new Date(a.tweet.date).getTime();
                    });
                    setTweets(() => tweets);
                });
        return () => {
            loadUserData();
        }
    }, [])

    function addTweet(tweet) {
        setTimeout(() => {
            database.collection("Tweetscollection")
                .add({
                    tweet
                })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        }, 1000)
    }

    return (
        <>
            <AuthProvider>
                <Router>
                    <Navbar className="navbar">
                        <Nav className="navbar">
                            <Link className="link" to="/Home">Home</Link>
                            <Link className="link" to="/userName">Profile</Link>
                        </Nav>
                        <button
                            className="btn btn-secondary my-2 my-sm-0 mr-4"
                            type="button"
                            onClick={handleLogOut}
                        >
                            Log Out
									</button>
                    </Navbar>
                    <TweetsContext.Provider value={{
                        tweets: tweets,
                        userName: userName,
                    }} >
                        <div className="container-sm">
                            <Switch>
                                <Route path="/UserName">
                                    <UserName onUserNameChange={handleUserNameChange}>
                                    </UserName>
                                </Route>
                                <Route path="/Home">
                                    <TweetsForm
                                        addTweet={(tweet) => addTweet(tweet)}
                                        userName={userName}
                                    />
                                    <TweetsList tweets={tweets}
                                    />
                                </Route>

                            </Switch>
                        </div>
                    </TweetsContext.Provider>
                </Router>
            </AuthProvider>
        </>
    );
}


