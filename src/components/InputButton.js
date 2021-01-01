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

function EditButton(props) {
  //On click i want to update that record inside of event state array
  //I will do this by using props function passed
  return (
    <div className="col s1">
      <button onClick={() => {}} className="btn btn-medium yellow darken-2">
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
