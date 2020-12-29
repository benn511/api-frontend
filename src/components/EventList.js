import React, { Fragment } from "react";

/* Missing style, missing delete button,  */

export default function EventList(props) {
  return (
    <div>
      <table className="striped centered responsive-table">
        <thead>
          {/* <!-- Header --> */}
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Delete</th>
          </tr>
          {/* <!-- Body (Data) --> */}
          <tbody>
            <tr>
              {props.events.map((event) => {
                return (
                  <Fragment>
                    <td>{event.event_name}</td>
                    <td>{event.event_description}</td>
                    <td>{event.event_owner}</td>
                    <td>
                      <button
                        onClick={}
                        href=""
                        className="btn-floating btn-medium waves-effect waves-light red lighten-1"
                      >
                        X
                      </button>
                    </td>
                  </Fragment>
                );
              })}
            </tr>
          </tbody>
        </thead>
      </table>
    </div>
  );
}
