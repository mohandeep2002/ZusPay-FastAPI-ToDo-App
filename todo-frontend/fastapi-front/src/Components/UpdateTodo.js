import React from "react";
import { Container } from "react-bootstrap";

function UpdateTodo(props) {
  return (
    <div className="App">
      Update - {props.title}
      {console.log(props.title)}
    </div>
  );
}

export default UpdateTodo;
