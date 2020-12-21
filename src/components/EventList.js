import React, { Component } from "react";
import Axios from "axios";

class EventsList extends Component {
  constructor() {
    super();
    this.state = { events: [] };
  }
  componentDidMount() {
    Axios.get("http://localhost:3000/db_api/read/event").then((response) => {
      console.log(response.data.events);
      this.setState({ events: response.data.events });
    });
  }

  render() {
    return (
      <ul>
        {this.state.events.map((event) => {
          return <li key={event.event_id}>{event.event_name}</li>;
        })}
      </ul>
    );
  }
}

export default EventsList;
