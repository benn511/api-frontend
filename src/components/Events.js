import React, { Component } from "react";
import Axios from "axios";
import EventList from "./EventList";
import EventsInput from "./EventInput";

//Lifting state up to Event since no need to refresh page on new db entry
class Events extends Component {
  constructor() {
    super();
    this.handleNewEvent = this.handleNewEvent.bind(this);
    this.state = { events: [] };
  }

  componentDidMount() {
    Axios.get("http://localhost:3000/db_api/read/event").then((response) => {
      console.log(response.data.events);
      this.setState({ events: response.data.events });
    });
  }

  handleNewEvent(newData) {
    this.setState({ events: [...this.state.events, newData] });
  }

  render() {
    return (
      <div>
        <EventsInput onNewEvent={this.handleNewEvent} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default Events;
