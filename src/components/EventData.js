import React from "react";

/* Missing style, missing delete button,  */

export default function EventList(props) {
  return (
    <tr>
      <td>{props.event.event_name}</td>
      <td>{props.event.event_description}</td>
      <td>{props.event.event_owner}</td>
      <td>
        <button
          onClick={() => {
            props.handleDeleteEvent(props.event.event_id);
          }}
          href=""
          className="btn-floating btn-medium waves-effect waves-light red lighten-1"
        >
          X
        </button>
      </td>
    </tr>
  );
}
