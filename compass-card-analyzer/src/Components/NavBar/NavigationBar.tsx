import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import { Col, Navbar } from "react-bootstrap";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar className="nav-bar" fixed="top" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Compass Card Analyzer
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavigationBar;
