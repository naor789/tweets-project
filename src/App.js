import React from 'react';
import './App.css';
import TweetsList from './Components/TweetsList';
import TweetsForm from './Components/TweetsForm';
import UserName from './Components/UserName';
import { getTweet } from "./lib/api"
// import { createTweets } from "./lib/api"
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      newTweet: "",
      loading: false,
      userName:"",
      errorMessage: ""
    }
  }


  componentDidMount() {
    this.loadUserData();
  }


  async loadUserData() {
    const response = await getTweet();
    this.setState({
      tweets: response.data.tweets
    });
    console.log(response.data);
  }

  handleUserNameChange(userName) {
    this.setState({
      userName: userName,
    });
  }

  addTweet = (tweet) => {
    this.setState({ loading: true });
    axios.post(`https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet`, tweet)
      .then(response => {
        console.log(response);
        console.log(response.data);
        this.loadUserData();
        this.setState({ loading: false })
        // this.setState({ tweets: [tweet, ...this.state.tweets] })
      }).catch(error => {
        this.setState({ errorMessage: error.massage })
      })
    // console.error(error))
  }


  render() {
    return (
      <>
        <Router>
          <div className="container-sm">
            <Navbar>
              <Nav>
                <Link to="/">Home</Link>
                <Link to="/UserName">Profile</Link>
              </Nav>
            </Navbar>
            <Switch>
              <Route path="/UserName">
                <UserName onUserNameChange={(userName) => this.handleUserNameChange(userName)}>
                </UserName>
              </Route>
              <Route exact path="/">
                <TweetsForm
                  addTweet={this.addTweet}
                  loading={this.state.loading}
                  userName={this.state.userName}
                  errorMessage={this.state.errorMessage}
                />
                <TweetsList tweets={this.state.tweets}
                />
              </Route>
              
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}



export default App;

