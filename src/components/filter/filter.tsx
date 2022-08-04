import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as UnitIcon } from "../../assets/icons/house_unit.svg";
import { ReactComponent as OccupantsIcon } from "../../assets/icons/people.svg";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import "./filter.scoped.scss";

const Filter = () => {
  return (
    <Card className="filter-section border-0">
      <Card.Body>
        <Form className="filter-form px-0">
          <Row xs={1} md={1} lg={3} className="px-0">
            <Col className="ps-0 location-col">
              <Form.Group className="" controlId="exampleForm.ControlInput1">
                <Form.Label>Location</Form.Label>
                <InputGroup>
                  <InputGroup.Text
                    id="basic-addon1"
                    className="bg-white border border-end-0"
                  >
                    <LocationIcon />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search location"
                    aria-label="location"
                    aria-describedby="basic-addon1"
                    className="border border-start-0"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col className="p-0">
              <Form.Label>Email address</Form.Label>
              <Row xs={1} md={2} className="p-0">
                <Col className="p-">
                  <InputGroup>
                    <InputGroup.Text
                      id="basic-addon1"
                      className="bg-white border border-end-0"
                    >
                      <UnitIcon />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Unit count"
                      aria-label="unit"
                      aria-describedby="basic-addon1"
                      className="border border-start-0"
                    />
                  </InputGroup>
                </Col>
                <Col className="p-">
                  <InputGroup>
                    <InputGroup.Text
                      id="basic-addon1"
                      className="bg-white border border-end-0"
                    >
                      <OccupantsIcon />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Occupancy"
                      aria-label="occupancy"
                      aria-describedby="basic-addon1"
                      className="border border-start-0"
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Col>
            <Col className="d-flex p-0 mt-4 mt-lg-0" xs="auto">
              <Button variant="primary ms-auto mt-auto d search-btn d-flex justify-content-center align-items-center">
                <SearchIcon />
                <p className="text">Search</p>
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Filter;
