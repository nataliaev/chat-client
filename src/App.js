import React from "react";
import { allChannels } from "./actions";
import { connect } from "react-redux";
import MessageForm from "../src/components/MessageForm";
import UserForm from "./components/UserForm";
import "./App.css";

const serverUrl =
  //"https://radiant-bastion-91678.herokuapp.com/stream" ||
  "http://localhost:5000/stream";

class App extends React.Component {
  source = new EventSource(serverUrl);

  componentDidMount() {
    this.source.onmessage = event => {
      const channels = JSON.parse(event.data);

      this.props.allChannels(channels);
    };
  }

  render() {
    const channels = this.props.channels.map((channel, index) => (
      <p key={index}>
        {channel.name}
      </p>
    ));

    return (
      <main>
        <UserForm user={this.props.user} />
        <MessageForm user={this.props.user} />
        <div className="messages">
          <h3>Messages:</h3>
          {channels}
        </div>
      </main>
    );
  }
}

function MapStateToProps(state) {
  return {
    channels: state.channels,
    user: state.user
  };
}

export default connect(
  MapStateToProps,
  { allChannels }
)(App);
