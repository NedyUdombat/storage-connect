import React from "react";
import Container from "react-bootstrap/Container";
import useStorages from "../../hooks/storages";
import ItemCardList from "../itemCardList/itemCardList";
import SectionSubTitle from "../sectionSubTitle/sectionSubTitle";
import SectionTitle from "../sectionTitle/sectionTitle";

import "./featuredShelfStorages.scoped.scss";

const FeaturedShelfStorages = () => {
  const { featuredSelfStorages } = useStorages();

  return (
    <Container className="featured-shelf-section" fluid>
      <Container className="content">
        <SectionTitle value="Featured Self Storages" />
        <SectionSubTitle
          classnames="mb-4"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare"
        />
        <ItemCardList data={featuredSelfStorages} />
        <Container className="carousel-controls d-flex justify-content-center">
          <div className="carousel-control-item" />
          <div className="carousel-control-item active" />
          <div className="carousel-control-item" />
          <div className="carousel-control-item" />
        </Container>
      </Container>
    </Container>
  );
};

export default FeaturedShelfStorages;
