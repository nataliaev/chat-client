import React from "react";
import superagent from "superagent";

export default class MessageForm extends React.Component {
  state = {
    message: ""
  };

  onSubmit = async event => {
    event.preventDefault();

    const message = this.state.message;

    await superagent.post("http://localhost:5000/message").send({ message });

    this.setState({ message: "" });
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3>New message</h3>
          {/* <input
            type="text"
            onChange={this.onChange}
            value={this.state.name}
            name="name"
            placeholder="name"
          /> */}
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.message}
            name="message"
            placeholder="message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
