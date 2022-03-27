import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import FormComponent from "./Components/Form";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: "#181818",
        }}
      >
        <div className="App">
          <Navbar expand="lg" variant="" bg="">
            <Container className="App">
              <Navbar.Brand href="">
                <h1>FastAPI - Zuspay - ToDo App</h1>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
        <div className="container App">
          <FormComponent />
          <hr></hr>
        </div>
      </div>
    );
  }
}
export default App;
