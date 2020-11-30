import React from 'react';
import './App.css';
import TweetsList from './Components/TweetsList';
import TweetsForm from './Components/TweetsForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      newTweet: ""
    }
  }

  componentWillMount() {
    localStorage.getItem('tweets') && this.setState({
      tweets: JSON.parse(localStorage.getItem('tweets'))
    })
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('tweets', JSON.stringify(nextState.tweets))
  }


  addTweet = (tweet) => {
    this.setState({ tweets: [tweet, ...this.state.tweets] })
  }

  render() {
    return (
      <div className="container-sm">
        <TweetsForm
          addTweet={this.addTweet}
        />
        <TweetsList tweets={this.state.tweets}
        />
      </div>
    );
  }
}



export default App;

