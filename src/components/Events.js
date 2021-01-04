import React, { Component } from "react";
import Axios from "axios";
import EventTable from "./EventTable";
import EventsInput from "./EventInput";

//Lifting state up to Event since no need to refresh page on new db entry
class Events extends Component {
  constructor() {
    super();
    /* First component: EventInput */
    this.handleChange = this.handleChange.bind(this);
    this.handleNewEvent = this.handleNewEvent.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleSubmitCreate = this.handleSubmitCreate.bind(this);

    /* Second component: EventTable */
    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.state = {
      events: [],
      currEditing: false,
      event: {
        event_name: "Parade",
        event_owner: "Benny",
        event_description: "this is a desc",
        event_id: "5",
      },
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:3000/db_api/read/events").then((response) => {
      console.log(response.data.events);
      this.setState({ events: response.data.events });
    });
  }

  /* Functions for EventInput */

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNewEvent(newData) {
    this.setState({ events: [...this.state.events, newData] });
  }

  handleSubmitEdit(event) {
    console.log("Edit form has been submitted");
    console.log(event);
    this.setState({ event: event });
  }

  handleSubmitCreate(event) {
    console.log("Edit form has been submitted");
    console.log(event);
  }

  /* Functions for EventTable */
  handleEditEvent(event) {
    let editable = !this.state.currEditing;
    this.setState({ currEditing: editable });
    this.setState({ event: event });
  }

  handleDeleteEvent(id) {
    //Axios request: Delete element from DB with id passed
    console.log(
      `Not actually fetching url yet but heres what it would look like....\nhttp://localhost:3000/db_api/delete/event/${id}`
    );
    //Remove the requested event from array
    let array = this.state.events.filter((event) => event.event_id !== id);
    this.setState({ events: array });
  }

  render() {
    return (
      <div>
        <EventsInput
          event={this.state.event}
          currEditing={this.state.currEditing}
          handleSubmitEdit={this.handleSubmitEdit}
          handleSubmitCreate={this.handleSubmitCreate}
        />
        {/* <EventTable
          events={this.state.events}
          handleDeleteEvent={this.handleDeleteEvent}
          handleEditEvent={this.handleEditEvent}
          currEditing={this.state.currEditing}
        /> */}
      </div>
    );
  }
}

export default Events;
