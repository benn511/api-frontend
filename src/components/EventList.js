import React from "react";
import EventData from "../components/EventData";

/* Missing style, missing delete button,  */

export default function EventList(props) {
  return (
    <div>
      <table className="striped centered responsive-table">
        {/* Name of columns */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Delete</th>
          </tr>
        </thead>
        {/* Data from REST API */}
        <tbody>
          {props.events.map((event) => {
            return (
              <EventData
                key={event.event_id}
                event={event}
                handleDeleteEvent={props.handleDeleteEvent}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
