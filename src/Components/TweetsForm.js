import React from 'react';


class TweetsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",

        }
    }


    handleSubmit = (event) => {
        event.preventDefault(event);
        const tweet = {
            content: this.state.content,
            userName: this.props.userName,
            date: Date.now(),

        }
        this.props.addTweet(tweet)
        this.setState({
            content: "",
        });
    }


    handleChange(event) {
        const value = event.target.value;
        this.setState({
            content: value,

        });
    }

    render() {
        return (
            <>
                <form className="mx-auto  w-50 p-4 position-relative" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="input-group input-tweets ">
                        <input type="text"
                            className="form-control input-tweets-text"
                            placeholder="What you have in mind..."
                            id="usersTweet"
                            value={this.state.content}
                            onChange={(event) => this.handleChange(event)}>
                        </input>
                        <div className="div-button">
                            {this.state.content.length > 140 ?
                                <button onClick={(event) => this.handleSubmit(event)} className="btn btn-primary tweets-button button" type="submit" disabled={true}>Tweet</button>
                                : <button onClick={(event) => this.handleSubmit(event)} className="btn btn-primary tweets-button button" type="submit">Tweet</button>}
                            <p> {this.props.errorMessage} </p>
                            {this.state.content.length > 140 ?
                                <div className="warning"> Tweet can't contain more than 140 chars </div>
                                : <span></span>}
                        </div>
                    </div>
                </form>
            </>
        )
    }

}

export default TweetsForm;
