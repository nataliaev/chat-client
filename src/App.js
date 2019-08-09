import React from "react";
import { allMessages } from "./actions";
import { connect } from "react-redux";
import MessageForm from '../src/components/MessageForm'

class App extends React.Component {
  source = new EventSource("http://localhost:5000/stream");

  componentDidMount() {
    this.source.onmessage = event => {
      const messages = JSON.parse(event.data);

      this.props.allMessages(messages);
    };
  }

  render() {
    const messages = this.props.messages.map((message, index) => (
      <p key={index}>{message.text}</p>
    ));

    return (
      <main>
        <MessageForm/>
        {messages}
      </main>
    );
  }
}

function MapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(
  MapStateToProps,
  { allMessages }
)(App);
