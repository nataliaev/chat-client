import React from "react";
import View from './view'
import { setUser } from '../../actions'
import { connect } from 'react-redux'
import '../MessageForm/MessageForm.css'

class UserForm extends React.Component {
  state = {
    name: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.setUser(this.state.name)
    this.setState({ name: "" });
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  render() {
    return <View 
      onSubmit={this.onSubmit} 
      onChange={this.onChange} 
      value={this.state.name}
      user={this.props.user}/>
  }
}

export default connect(null, { setUser })(UserForm)