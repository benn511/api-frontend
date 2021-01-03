import React from "react";
import InputButton from "./InputButton";

function EventsInput(props) {
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
              onChange={props.handleChange}
              name="owner"
              value={props.event.event_owner}
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
              onChange={props.handleChange}
              value={props.event.event_name}
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
              onChange={props.handleChange}
              name="description"
              value={props.event.event_description}
            />
            <label htmlFor="icon_comment" className="active">
              Description
            </label>
          </div>
          {/* Input button */}
          <InputButton
            currEditing={props.currEditing}
            handleCreateEvent={props.handleCreateEvent}
            event={props.event}
          />
        </div>
      </form>
    </div>
  );
}

export default EventsInput;
