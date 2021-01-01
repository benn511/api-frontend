import React from "react";

function SubmitButton() {
  return (
    <div className="col s1">
      <button type="submit" className="btn btn-medium green">
        <i className="material-icons">add</i>
      </button>
    </div>
  );
}

function EditButton() {
  return (
    <div className="col s1">
      <button type="submit" className="btn btn-medium yellow darken-2">
        <i className="material-icons">edit</i>
      </button>
    </div>
  );
}

export default function InputButton(props) {
  if (props.isEditing) {
    return <EditButton />;
  } else {
    return <SubmitButton />;
  }
}
