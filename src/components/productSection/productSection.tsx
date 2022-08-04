import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./productSection.scoped.scss";
import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <>
      <Container className="product d-flex align-items-center">
        <Row>
          <Col lg={6} className="p-0">
            <p className="lead-text">Do you have a Self Storage for Sale?</p>
            <p className="sub-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc.
            </p>
            <Link to="#" className="btn">
              Sell Your Self Storage
            </Link>
          </Col>
          <Col lg={6} />
        </Row>
      </Container>
      <Container className="product product-short border-top d-flex align-items-center">
        <Row>
          <Col lg={6} />
          <Col lg={6} className="p-0">
            <p className="lead-text">Do you want to buy a Self Storage?</p>
            <p className="sub-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc.
            </p>
            <Link to="#" className="btn">
              Buy a Self Storage
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductSection;
