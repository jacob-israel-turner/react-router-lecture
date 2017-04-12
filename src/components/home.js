import React, {Component} from 'react'

import {Redirect} from 'react-router-dom'

export default class Home extends Component {
  state = {
    submitted: false,
    user: '',
  }
  updateUserInput({target: {value}}) {
    this.setState({user: value})
  }
  handleButtonClick() {
    // this.props.history.push(`/users/${this.state.user}`)
    this.setState({submitted: true})
  }
  render() {
    return this.state.submitted ?
        <Redirect to={`/users/${this.state.user}`} /> :
        <div>
          <h1>Home!</h1>
          <input type='text' onChange={this.updateUserInput.bind(this)} value={this.state.user} />
          <button onClick={this.handleButtonClick.bind(this)}>Go!</button>
        </div>
  }
}
