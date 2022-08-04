import React from "react";
import "./footer.scoped.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo_blue.svg";

const Footer = () => {
  return (
    <Container className="footer bg-white" fluid>
      <Row xs={1} md={2} lg={4}>
        <Col>
          <div className="brand d-flex align-items-center">
            <LogoIcon />
            <p className="brand-text">StorageConnect</p>
          </div>
          <p className="brand-description">
            Nam posuere accumsan porta. Integer id orci sed ante tincidunt
            tincidunt sit amet sed libero.
          </p>
          <p className="copyright">
            &copy; StorageConnect 2022, All Rights Reserved
          </p>
        </Col>
        <Col className="ps-lg-5">
          <p className="title">QUICK LINKS</p>
          <ListGroup>
            <ListGroup.Item className="px-0 bg-transparent border-0">
              Active Listings
            </ListGroup.Item>
            <ListGroup.Item className="px-0 bg-transparent border-0">
              Sell your Self Storage
            </ListGroup.Item>
            <ListGroup.Item className="px-0 bg-transparent border-0">
              Free Evaluation
            </ListGroup.Item>
            <ListGroup.Item className="px-0 bg-transparent border-0">
              Learn
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <p className="title">NEWSLETTER</p>
          <Form className="newsletter-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Get latest updates right in your inbox</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Button variant="primary" className="btn submit-btn" type="submit">
              Subscribe Now
            </Button>
          </Form>
        </Col>
        <Col>
          <p className="title">LET&#39;s GET SOCIAL</p>
          <Stack direction="horizontal" gap={3}>
            <div className="d-flex justify-content-center align-items-center media-icon">
              <FacebookIcon />
            </div>
            <div className="d-flex justify-content-center align-items-center media-icon">
              <LinkedInIcon />
            </div>
            <div className="d-flex justify-content-center align-items-center media-icon">
              <TwitterIcon />
            </div>
            <div className="d-flex justify-content-center align-items-center media-icon">
              <InstagramIcon />
            </div>
          </Stack>
          <Form.Select>
            <option>English</option>
            <option>German</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
