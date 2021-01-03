import React from "react";
import InputButton from "./InputButton";

class EventsInput extends React.Component {
  constructor(props) {
    super(props);
    this.owner = React.createRef();
    this.name = React.createRef();
    this.description = React.createRef();
  }

  handleSubmit(e) {
    alert("Form was submitted");
    e.preventDefault();
    let event = {
      owner: this.owner,
      name: this.name,
      description: this.description,
    };
    console.log(event);
    //props.handleEditSubmit(event, 1)
  }

  render() {
    return (
      <div className="row">
        {/* Materialize form */}
        <form className="col s12">
          {/* Owner and Event Name */}
          <div className="row">
            {/* Owner input */}
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input
                type="text"
                id="icon_prefix"
                className="validate"
                onChange={this.props.handleChange}
                name="owner"
                defaultValue={this.props.event.event_owner}
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
                onChange={this.props.handleChange}
                defaultValue={this.props.event.event_name}
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
                onChange={this.props.handleChange}
                name="description"
                defaultValue={this.props.event.event_description}
              />
              <label htmlFor="icon_comment" className="active">
                Description
              </label>
            </div>
            {/* Input button */}
            <InputButton
              currEditing={this.props.currEditing}
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
