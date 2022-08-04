import React from "react";
import Topbar from "../../components/topbar/topbar";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import "./hero.scoped.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container className="hero p-0 d-flex flex-column" fluid>
      <Topbar />
      <Container
        className="hero-content flex-fill d-flex flex-column justify-content-center align-items-center"
        fluid
      >
        <h1 className="hero-title">Self Storage Business</h1>
        <h1 className="hero-title">Buy. Sell. Learn.</h1>
        <p className="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sagittis,
          aliquam non tortor blandit lobortis. blandit
        </p>
        <Stack
          gap={4}
          className="ctas mx-auto d-none d-md-flex"
          direction="horizontal"
        >
          <Link to="#" className="btn btn-filled">
            Sell Your Self Storage
          </Link>
          <Link to="#" className="btn btn-alt">
            Active Self Storage Listings
          </Link>
        </Stack>
        <Stack gap={4} className="ctas mx-auto d-md-none" direction="vertical">
          <Link to="#" className="btn btn-filled">
            Sell Your Self Storage
          </Link>
          <Link to="#" className="btn btn-alt">
            Active Self Storage Listings
          </Link>
        </Stack>
      </Container>
    </Container>
  );
};

export default Hero;
