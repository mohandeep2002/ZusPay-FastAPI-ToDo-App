import axios from "axios";
import { Offcanvas } from "bootstrap";
import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import UpdateTodo from "./UpdateTodo";

function TodoItem(props) {
  const deleteTodoHandler = (title) => {
    axios
      .delete(`http://localhost:8000/api/todo/${title}`)
      .then((res) => console.log(res.data));
  };
  const updateTodoHandler = (title) => {
    <UpdateTodo todo={title} />;
  };

  return (
    <div>
      <div className="App">
        <Container className="App">
          <Row>
            <Col>{props.todo.title}</Col>
            <Col xs={6}>{props.todo.description}</Col>
            <Col>
              <button
                onClick={() => deleteTodoHandler(props.todo.title)}
                className="btn btn-outline-danger my-2 mx-2"
                variant="secondary"
                size="sm"
              >
                Delete
              </button>
              {/* <button
                onClick={() => updateTodoHandler(props.todo.title)}
                className="btn btn-outline-warning my-2 mx-2"
                variant="secondary"
                size="sm"
              >
                Update
              </button> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default TodoItem;
