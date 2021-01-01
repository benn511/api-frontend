import React, { Component } from "react";
import Axios from "axios";
import EventList from "./EventList";
import EventsInput from "./EventInput";

//Lifting state up to Event since no need to refresh page on new db entry
class Events extends Component {
  constructor() {
    super();
    this.handleNewEvent = this.handleNewEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.state = { events: [] };
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
    let array = [...this.state.events]; //Make separate copy of array
    for (let i = 0; i < array.length; i++) {
      if (id == array[i].event_id) {
        array.splice(i, 1);
        this.setState({ events: array });
      }
    }
  }

  render() {
    return (
      <div>
        <EventsInput onNewEvent={this.handleNewEvent} />
        <EventList
          events={this.state.events}
          handleDeleteEvent={this.handleDeleteEvent}
        />
      </div>
    );
  }
}

export default Events;
