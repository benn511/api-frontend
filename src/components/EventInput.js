import React, { Component } from "react";
import Axios from "axios";

class EventsInput extends Component {
  constructor() {
    super();
    this.state = { name: "", description: "", owner: "", res: "" };
  }

  handleChange = (event) => {
    // Targets name attribute of <input> element
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending request with attributes from state to");
    console.log("http://localhost:3000/db_api/create/event");
    Axios.post("http://localhost:3000/db_api/create/event", this.state)
      .then((response) => {
        console.log(response);
        this.setState({ res: response.data.msg });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Event Name: </label>
          <input type="text" name="name" onChange={this.handleChange} />
          <label htmlFor="">Event description: </label>
          <input type="text" name="description" onChange={this.handleChange} />
          <label htmlFor="">Event Owner: </label>
          <input type="text" name="owner" onChange={this.handleChange} />
          <button type="submit">Add</button>
        </form>
        <h2>{this.state.res}</h2>
      </div>
    );
  }
}

export default EventsInput;
