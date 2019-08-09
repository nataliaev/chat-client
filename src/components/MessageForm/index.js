import React from "react";
import superagent from "superagent";
import View from "./view";
import "./MessageForm.css";

export default class MessageForm extends React.Component {
  state = {
    message: ""
  };

  onSubmit = async event => {
    event.preventDefault();

    await superagent.post("http://localhost:5000/message").send({
      message: this.state.message,
      user: this.props.user
    });

    this.setState({ message: "" });
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <View
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        value={this.state.message}
      />
    );
  }
}
