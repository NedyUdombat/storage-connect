import React from "react";
import "./learnSection.scoped.scss";
import Container from "react-bootstrap/Container";
import useLearnStorages from "../../hooks/learn";
import SectionSubTitle from "../sectionSubTitle/sectionSubTitle";
import SectionTitle from "../sectionTitle/sectionTitle";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as PricetagIcon } from "../../assets/icons/pricetag.svg";
import { ReactComponent as CircleIcon } from "../../assets/icons/circle.svg";

const LearnSection = () => {
  const { resources } = useLearnStorages();
  return (
    <Container className="learn-section" fluid>
      <Container className="content">
        <SectionTitle
          classnames="title"
          value="Learn Everything About Buying, Selling, and Operating a Self Storage"
        />
        <SectionSubTitle
          classnames="subtitle"
          value="Learn about literally anything to know about Selling or Buying a Self Storage"
        />

        <Row xs={1} md={2} lg={4} className="g-4 item-list">
          {resources.map((item) => (
            <Col key={item.id} className="d-flex justify-content-center">
              <Card className="align-items-stretch item-card">
                <Card.Img
                  variant="top"
                  src={
                    item.image
                      ? item.image
                      : require("../../assets/images/house_image_placeholder.png")
                  }
                />
                <Card.Body className="d-flex flex-column jusitfy-content-between">
                  <Card.Title>{item.title}</Card.Title>
                  <Stack direction="horizontal" gap={3}>
                    <div className=" d-flex">
                      <ClockIcon />
                      <p className="value">{item.uploaded_at}</p>
                    </div>
                    <div className=" d-flex">
                      <PricetagIcon />
                      <p className="value">{item.category}</p>
                    </div>
                    <div className="d-flex">
                      <CircleIcon />
                      <p className="value">{item.author}</p>
                    </div>
                  </Stack>
                  <Button
                    variant="primary"
                    className="footer-btn d-block mx-auto mt-auto"
                  >
                    Explore the Learning Section
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Link
          to={"#"}
          className="btn view-more-btn d-flex justify-content-center align-items-center text-center mx-auto"
        >
          View More Listings
        </Link>
      </Container>
    </Container>
  );
};

export default LearnSection;
