import React, { useState } from 'react';
import { createTweets } from "../lib/api"


class TweetsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            loading: false

        }
    }


    handleSubmit = (event) => {
        event.preventDefault(event);
        this.setState({ loading: true })
        const tweet = {
            content: this.state.content,
            userName: "Naor",
            date: new Date().toISOString(),
        }
        this.props.addTweet(tweet)
        this.setState({
            content: "",
        });
        // localStorage.setItem(tweet);
    }
    // this.props.onSetResult = (note) => {
    //     localStorage.setItem(note);

    // }
    //   }



    handleChange(event) {
        const value = event.target.value;
        this.setState({
            content: value,

        });
    }

    render() {
        return (
            <>
                <form className="form mt-5" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="input-group">
                        <input type="text"
                            className="form-control "
                            placeholder="What you have in mind..."
                            id="usersTweet"
                            value={this.state.content}
                            onChange={(event) => this.handleChange(event)}>
                        </input>
                        {this.state.content.length > 140 || this.props.loading === true ?
                            <button onClick={(event) => this.handleSubmit(event)} className="btn btn-primary" type="submit" disabled={true}>Tweet</button>
                            : <button onClick={(event) => this.handleSubmit(event)} className="btn btn-primary" type="submit">Tweet</button>}
                        <p> {this.props.errorMessage} </p>
                        {this.state.content.length > 140 ?
                            <div className="warning"> Tweet can't contain more than 140 chars </div>
                            : <span></span>}
                        {this.props.loading === true ?
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                            </div>
                            : <span></span>}

                    </div>
                </form>
            </>
        )
    }

}

export default TweetsForm;
