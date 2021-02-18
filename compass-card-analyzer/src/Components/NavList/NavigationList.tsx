import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav } from "react-bootstrap";
import "./NavigationList.css";

function NavigationList() {
  return (
    <Nav defaultActiveKey="#home" className="flex-column navigation-list">
      <div className="sticky">
        {" "}
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link eventKey="link-1">Usage Patterns</Nav.Link>
        <Nav.Link eventKey="link-2">Statistics</Nav.Link>
      </div>
    </Nav>
  );
}

export default NavigationList;
