import React from "react";

export default function EventList(props) {
  return (
    <div>
      <ul>
        {props.events.map((event) => {
          return <li key={event.event_id}>{event.event_name}</li>;
        })}
      </ul>
    </div>
  );
}
