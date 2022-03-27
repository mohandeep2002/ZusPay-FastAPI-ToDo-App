import TodoItem from "./Todo";
import { Table } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";

export default function TodoView(props) {
  return (
    <div className="App">
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title</h4>
            </Col>
            <Col xs={6}>
              <h4>Description</h4>
            </Col>
            <Col>
              <h4>Actions</h4>
            </Col>
          </Row>
        </Container>
        <hr></hr>
      </div>
      <div className="App">
        <ul className="App">
          {props.todoList.map((todo) => (
            <TodoItem todo={todo} />
          ))}
        </ul>
      </div>
      <hr></hr>
    </div>
  );
}
