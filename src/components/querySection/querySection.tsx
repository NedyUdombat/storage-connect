import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";
import "./querySection.scoped.scss";
import { Link } from "react-router-dom";

const QuerySection = () => {
  return (
    <Container className="query-section" fluid>
      <Card className="border-0">
        <Card.Body className="d-block d-lg-flex align-items-center justify-content-between h-100">
          <div>
            <Card.Title>Any Queries? Reach Out to Us</Card.Title>
            <Card.Text>
              Feel free to write to us, we are happy to help you
            </Card.Text>
          </div>
          <div>
            <Link
              to="#"
              className="btn d-flex justify-content-center align-items-center"
            >
              <p className="text">Write to Us</p>
              <MailIcon />
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default QuerySection;
