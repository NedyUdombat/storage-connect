import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import ItemCard from "../itemCard/itemCard";
import "./itemCardList.scoped.scss";

interface ItemCardListProps {
  data: any[];
}

const ItemCardList = ({ data }: ItemCardListProps) => (
  <Row xs={1} md={2} lg={3} className="g-4 item-list">
    {data.map((item) => (
      <Col key={item.id} className="d-flex justify-content-center">
        <ItemCard item={item} />
      </Col>
    ))}
  </Row>
);

export default ItemCardList;
