import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row } from "react-bootstrap";

import "./CompassApp.css";
import NavigationBar from "./NavBar/NavigationBar";
import NavigationList from "./NavList/NavigationList";

function CompassApp() {
  return (
    <div>
      <NavigationBar />
      <Row className="big-one">
        <Col className="col-md-3">
          <NavigationList />
        </Col>
        <Col className="col-md-9">
          <p>Hello World.</p>
          <Button variant="outline-primary">Primary</Button> <div></div>
        </Col>
      </Row>
    </div>
  );
}

export default CompassApp;
