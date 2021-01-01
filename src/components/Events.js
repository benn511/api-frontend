import React, { Component } from "react";
import Axios from "axios";
import EventTable from "./EventTable";
import EventsInput from "./EventInput";

//Lifting state up to Event since no need to refresh page on new db entry
class Events extends Component {
  constructor() {
    super();
    this.handleNewEvent = this.handleNewEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.state = { events: [], currEditing: false };
  }

  componentDidMount() {
    Axios.get("http://localhost:3000/db_api/read/events").then((response) => {
      console.log(response.data.events);
      this.setState({ events: response.data.events });
    });
  }

  handleNewEvent(newData) {
    this.setState({ events: [...this.state.events, newData] });
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

  handleEditEvent() {
    let editable = !this.state.currEditing;
    this.setState({ currEditing: editable });
  }

  render() {
    return (
      <div>
        <EventsInput onNewEvent={this.handleNewEvent} />
        <EventTable
          events={this.state.events}
          handleDeleteEvent={this.handleDeleteEvent}
          handleEditEvent={this.handleEditEvent}
          currEditing={this.state.currEditing}
        />
      </div>
    );
  }
}

export default Events;
