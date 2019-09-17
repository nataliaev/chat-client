import React from "react";
import { allMessages } from "./actions";
import { connect } from "react-redux";
import MessageForm from "../src/components/MessageForm";
import UserForm from "./components/UserForm";
import "./App.css";

const serverUrl =
  "https://peaceful-hamlet-02378.herokuapp.com/stream" ||
  "http://localhost:5000/stream";

class App extends React.Component {
  source = new EventSource(serverUrl);

  componentDidMount() {
    this.source.onmessage = event => {
      const messages = JSON.parse(event.data);

      this.props.allMessages(messages);
    };
  }

  render() {
    const messages = this.props.messages.map((message, index) => (
      <p key={index}>
        {message.user}: {message.text}
      </p>
    ));

    return (
      <main>
        <UserForm user={this.props.user} />
        <MessageForm user={this.props.user} />
        <div className="messages">
          <h3>Messages:</h3>
          {messages}
        </div>
      </main>
    );
  }
}

function MapStateToProps(state) {
  return {
    messages: state.messages,
    user: state.user
  };
}

export default connect(
  MapStateToProps,
  { allMessages }
)(App);
