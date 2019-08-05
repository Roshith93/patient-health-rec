import React, { Component } from 'react'

export default class Success extends Component {
    continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <React.Fragment>
          {/* <AppBar title="Success" /> */}
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
        </React.Fragment>
    )
  }
}
