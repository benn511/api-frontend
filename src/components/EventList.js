import React from "react";

export default function EventList(prop) {
  return (
    <div>
      <ul>
        {this.props.events.map((event) => {
          return <li key={event.event_id}>{event.event_name}</li>;
        })}
      </ul>
    </div>
  );
}
