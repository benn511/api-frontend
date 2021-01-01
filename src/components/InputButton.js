import React from "react";

export default function InputButton(props) {
  if (props.isEditing) {
    return <EditButton />;
  } else {
    return <SubmitButton />;
  }
  return <div></div>;
}
