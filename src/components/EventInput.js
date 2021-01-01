import React, { Component } from "react";
import InputButton from "./InputButton";
import Axios from "axios";

class EventsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.event.event_name ? props.event.event_name : "",
      description: props.event.event_description
        ? props.event.event_description
        : "",
      owner: props.event.event_owner ? props.event.event_owner : "",
      res: "",
    };
  }

  handleChange = (event) => {
    // Targets name attribute of <input> element
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEdit = (event) => {
    this.setState({
      name: event.event_name,
      description: event.event_description,
      owner: event.event_owner,
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
                value={this.state.owner}
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
                value={this.state.name}
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
                value={this.state.description}
              />
              <label htmlFor="icon_comment" className="active">
                Description
              </label>
            </div>
            {/* Input button */}
            <InputButton
              currEditing={this.props.currEditing}
              handleSubmitEdit={this.props.handleSubmitEdit}
              handleCreateEvent={this.props.handleCreateEvent}
              event={this.props.event}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EventsInput;
