import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from "react-bootstrap";

function App() {
  return (
    <div>
      <ReactBootstrap.Navbar bg="dark" variant="dark" expand="sm">
        <ReactBootstrap.Navbar.Brand href="#home">LW-MOM</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown title="Events" id="basic-nav-dropdown">
              <ReactBootstrap.NavDropdown.Item href="/events/competition">Competition</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/events/workshops">Workshops</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/events/fdps">Fdps</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/events/trainings">Trainings</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Divider />
              <ReactBootstrap.NavDropdown.Item href="/events/conference">Conference</ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Form inline>
            <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
          </ReactBootstrap.Form>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
}

export default App;
