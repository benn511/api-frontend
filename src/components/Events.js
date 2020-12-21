import React, { Component } from "react";
import Axios from "axios";
import EventsList from "./components/EventList";

//Lifting state up to Event since no need to refresh page on new db entry
class Events extends Component {
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

  handleEventlistChange()

  render() {
    return <div>
        <EventsList/>
    </div>;
  }
}

export default Events;
