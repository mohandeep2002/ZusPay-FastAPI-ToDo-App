import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import TodoList from "./TodoListView";
export default function FormComponent() {
  const [todoList, setTodoList] = useState([{}]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/todo").then((res) => {
      setTodoList(res.data);
    });
  });

  const addTodohandler = () => {
    axios
      .post("http://127.0.0.1:8000/api/todo/", {
        title: title,
        description: desc,
      })
      .then((res) => console.log(res));
  };
  return (
    <div>
      <strong>
        <h4>Add New Task</h4>
      </strong>
      <div>
        <Form>
          <Row>
            <Col>
              <Form.Control
                placeholder="Title"
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </Col>
            <Col xs={7}>
              <Form.Control
                placeholder="Description"
                onChange={(event) => setDesc(event.target.value)}
                required
              />
            </Col>
            <Col>
              <Button
                type="submit"
                className="btn btn-success"
                onClick={addTodohandler}
              >
                Add Task
              </Button>
            </Col>
          </Row>
        </Form>
        <div>
          <br></br>
          <div className="App">
            <h2> - Your Tasks - </h2>
            <div>
              <TodoList todoList={todoList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
