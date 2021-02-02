import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';

import './CompassApp.css';
import NavigationBar from './NavBar/NavigationBar';


function CompassApp() {
  return (
    <div className="">
      <NavigationBar/>
      <Row className="CCAContainer container-fluid">
        <Col>
          <p>Hello World.</p>
          <Button variant="outline-primary">Primary</Button>{' '}
        </Col>
      </Row>
    </div>
  );
}

export default CompassApp;
