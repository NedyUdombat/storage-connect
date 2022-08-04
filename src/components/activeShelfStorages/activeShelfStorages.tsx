import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import useStorages from "../../hooks/storages";
import Filter from "../filter/filter";
import ItemCardList from "../itemCardList/itemCardList";
import SectionSubTitle from "../sectionSubTitle/sectionSubTitle";
import SectionTitle from "../sectionTitle/sectionTitle";

import "./activeShelfStorages.scoped.scss";

const ActiveShelfStorages = () => {
  const { activeSelfStorages } = useStorages();

  return (
    <Container className="active-shelf-section" fluid>
      <Container className="content">
        <SectionTitle value="Active Listing Self Storages" />
        <SectionSubTitle
          classnames="mb-4"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare"
        />

        <Filter />

        <ItemCardList
          data={activeSelfStorages.filter((item, index) => index <= 5)}
        />

        <Link to={"#"} className="btn view-more-btn d-flex justify-content-center align-items-center text-center mx-auto">
          View More Listings
        </Link>
      </Container>
    </Container>
  );
};

export default ActiveShelfStorages;
