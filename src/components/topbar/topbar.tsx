import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ROUTE_URLS } from "../../routes/RouteUrls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./topbar.scoped.scss";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const Topbar = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="mb-3">
      <Navbar.Brand
        href={ROUTE_URLS.HOME_URL}
        className="d-flex align-items-center"
      >
        <Logo />
        <p className="text">StorageConnect</p>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="offcanvasNavbar-expand-lg"
        className="text-white"
      >
        <FontAwesomeIcon icon={faBars} />
      </Navbar.Toggle>
      <Navbar.Offcanvas
        id="offcanvasNavbar-expand-lg"
        aria-labelledby="offcanvasNavbarLabel-expand-lg"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
            <Navbar.Brand
              href={ROUTE_URLS.HOME_URL}
              className="d-flex align-items-center"
            >
              <Logo />
              <p className="text">StorageConnect</p>
            </Navbar.Brand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Active Listings</Nav.Link>
            <Nav.Link href="#action2">Sell your Self Storage</Nav.Link>
            <Nav.Link href="#action2">Free Evaluation</Nav.Link>
            <Nav.Link href="#action2">Learn</Nav.Link>
            <Nav.Link href="#action2" className="btn">
              Contact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Topbar;
