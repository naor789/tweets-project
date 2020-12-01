import React from 'react';
import './App.css';
import TweetsList from './Components/TweetsList';
import TweetsForm from './Components/TweetsForm'
import { getTweet } from "./lib/api"
// import { createTweets } from "./lib/api"
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      newTweet: "",
      loading: false,
      errorMessage:""
    }
  }


  componentDidMount() {
    this.loadUserData();
  }

  // componentDidUpdate() {
  //   this.render();
  //   this.setState({ loading: false})

  //  }
  async loadUserData() {
    // this.setState({ loading: true });
    const response = await getTweet();
    // this.setState({ user: { id: response.data.id, avatar: response.data.avatar, name: response.data.name, createdAt: response.data.createdAt } });
    this.setState({
      tweets: response.data.tweets});
    console.log(response.data);
  }

  // componentWillMount() {
  //   localStorage.getItem('tweets') && this.setState({
  //     tweets: JSON.parse(localStorage.getItem('tweets'))
  //   })
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem('tweets', JSON.stringify(nextState.tweets))
  // }


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
        this.setState({ errorMessage: error.massage})
      })
        // console.error(error))
  }


  render() {
    return (
      <div className="container-sm">
        <TweetsForm
          addTweet={this.addTweet}
          loading={this.state.loading}
          errorMessage={this.state.errorMessage}
        />
        <TweetsList tweets={this.state.tweets}
        />
      </div>
    );
  }
}



export default App;

