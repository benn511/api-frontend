import React, { Component } from "react";
import InputButton from "./InputButton";
import Axios from "axios";

class EventsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      owner: "",
      res: "",
    };
  }

  handleChange = (event) => {
    // Targets name attribute of <input> element
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/db_api/create/event", this.state)
      .then((response) => {
        console.log(response);
        this.setState({ res: response.data.msg });
        this.props.onNewEvent(response.data.event);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="row">
        {/* Materialize form */}
        <form className="col s12" onSubmit={this.handleSubmit}>
          {/* Owner and Event Name */}
          <div className="row">
            {/* Owner input */}
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input
                type="text"
                id="icon_prefix"
                className="validate"
                onChange={this.handleChange}
                name="owner"
              />
              <label htmlFor="icon_prefix" className="active">
                Owner
              </label>
            </div>
            {/* Event Name*/}
            <div className="input-field col s6">
              <i className="material-icons prefix">event</i>
              <input
                type="text"
                id="icon_event"
                className="validate"
                name="name"
                onChange={this.handleChange}
              />
              <label htmlFor="icon_event" className="active">
                Event Name
              </label>
            </div>
          </div>
          {/* Description and add button */}
          <div className="row">
            {/* Description text input */}
            <div className="input-field col s11 ">
              <i className="material-icons prefix">insert_comment</i>
              <input
                type="text"
                id="icon_comment"
                className="validate"
                onChange={this.handleChange}
                name="description"
              />
              <label htmlFor="icon_comment" className="active">
                Description
              </label>
            </div>
            {/* Input button */}
            <InputButton currEditing={this.props.currEditing} />
          </div>
        </form>
      </div>
    );
  }
}

export default EventsInput;
