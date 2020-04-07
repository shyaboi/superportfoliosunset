import React, { useState, Component } from "react";
<<<<<<< HEAD

import './style.css';
=======
>>>>>>> 8d87d02556224eee832fba7636d1d24eac5e7379
// import Container from "../../components/Container";
// import Col from "../../components/Col";
// import Row from "../../components/Row";








class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('This feature coming soon! ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
      <label>
<<<<<<< HEAD
       Your Name:
=======
        Name:
>>>>>>> 8d87d02556224eee832fba7636d1d24eac5e7379
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  
    );
  }
 
}

export default Contact;