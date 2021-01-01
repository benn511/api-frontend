import React from "react";
import EventData from "./EventData";

/* Missing style, missing delete button,  */

export default function EventTable(props) {
  return (
    <div>
      <table className="striped centered responsive-table">
        {/* Name of columns */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {/* Data from REST API */}
        <tbody>
          {props.events.map((event) => {
            if (event) {
              return (
                <EventData
                  key={event.event_id}
                  event={event}
                  handleEditEvent={props.handleEditEvent}
                  handleDeleteEvent={props.handleDeleteEvent}
                  currEditing={props.currEditing}
                />
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
