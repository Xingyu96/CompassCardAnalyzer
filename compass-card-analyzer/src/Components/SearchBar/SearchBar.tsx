import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./SearchBar.css";
import { Button, Col, Row } from "react-bootstrap";

function SearchBar() {
  return (
    <div>
      <Row id="search-bar-title" className="centered-text">
        <h3>Compass Card Analyzer</h3>
      </Row>
      <Row className="justify-content-md-center">
        <Button id="search-button" className="col-4">
          Upload .csv File
        </Button>
        <Button id="search-button" className="col-4">
          Use Sample File
        </Button>
      </Row>
    </div>
  );
}

export default SearchBar;
