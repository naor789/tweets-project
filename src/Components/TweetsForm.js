import React, { useState } from 'react';

class TweetsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }
    // const[item, setItem] = useState('');


    handleSubmit = (event) => {
        event.preventDefault();
        const tweet = {
            id: Date.now().toString(),
            date: new Date().toLocaleString(),
            // username: this.state.username,
            text: this.state.text,
        }
        this.props.addTweet(tweet)
        this.setState({
            text: ""
        });
        // localStorage.setItem(tweet);
    }
    // this.props.onSetResult = (note) => {
    //     localStorage.setItem(note);

    // }



    handleChange(event) {
        const value = event.target.value;
        this.setState({
            text: value,
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
                            id="usersNotes"
                            value={this.state.text}
                            onChange={(event) => this.handleChange(event)}>
                        </input>
                        {this.state.text.length > 140 ?
                            <button onClick={(event) => this.handleSubmit(event)} className="btn btn-primary" type="submit" disabled={true}>Tweet</button>
                            : <button onClick={(event) => this.handleSubmit(event)} className="btn btn-primary" type="submit">Tweet</button>}
                        {this.state.text.length > 140 ?
                            <div className="warning"> Tweet can't contain more than 140 chars </div>
                            : <span></span>}

                   
                    </div>
                </form>
            </>
        )
    }

}

export default TweetsForm;
