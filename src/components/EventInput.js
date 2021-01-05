import React from "react";
import InputButton from "./InputButton";

class EventsInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.owner = React.createRef();
    this.name = React.createRef();
    this.description = React.createRef();
  }

  handleSubmit(e, creating) {
    e.preventDefault();
    let event = {
      event_description: this.description.current.value,
      event_id: this.props.event.event_id,
      event_name: this.name.current.value,
      event_owner: this.owner.current.value,
    };
    document.getElementById("event-form").reset();
    if (creating) {
      this.props.handleSubmitCreate(event);
    } else {
      //instead of creating we are editing
      this.props.handleSubmitEdit(event);
    }
  }

  render() {
    return (
      <div className="row">
        {/* Materialize form */}
        <form id="event-form" className="col s12">
          {/* Owner and Event Name */}
          <div className="row">
            {/* Owner input */}
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input
                ref={this.owner}
                type="text"
                id="icon_prefix"
                className="validate"
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
                ref={this.name}
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
                ref={this.description}
                type="text"
                id="icon_comment"
                className="validate"
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
              handleSubmit={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EventsInput;
