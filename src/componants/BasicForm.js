import React, { Component } from 'react'

export default class BasicForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comments: "",
            topic: ""
        }

    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleComment = event => {
        this.setState({
            comments: event.target.value
        })
    }
    HandleTopic =  event => {
        this.setState({
            topic: event.target.value
        })
    }
    Submit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.Submit}>
                <div>
                    <lable>UserName</lable>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.handleUsernameChange} />
                    <div>
                        <label>Comment</label>
                        <textarea value={this.state.comments}
                            onChange={this.handleComment}
                        />
                    </div>
                    <div>
                        <label>
                            topic
                        </label>
                        <select value={this.state.topic} onChange={this.HandleTopic}>
                            <option value="react">Recat</option>
                            <option value="anguler">Anguler</option>
                            <option value="java">Java</option>
                        </select>

                    </div>
                    <button >Submit</button>
                </div>
            </form>
        )
    }
}
