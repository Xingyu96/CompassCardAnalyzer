import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row } from "react-bootstrap";

import "./CompassApp.css";
import NavigationBar from "./NavBar/NavigationBar";
import NavigationList from "./NavList/NavigationList";
import MapComponent from "./Map/MapComponent";

function CompassApp() {
  return (
    <div>
      <NavigationBar />
      <Row className="big-one">
        <Col className="remove-right-padding col-xs-4 col-md-3 col-lg-2 col-xl-2">
          <NavigationList />
        </Col>
        <Col className="col-xs-8 col-md-9 col-lg-10 col-xl-10">
          <Row>
            <MapComponent />
          </Row>
          <Row>
            <Col>
              <p>Hello World.</p>
              <Button variant="outline-primary">Primary</Button> <div></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default CompassApp;
