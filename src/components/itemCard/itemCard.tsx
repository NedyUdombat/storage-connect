import React from "react";
import "./itemCard.scoped.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as UnitIcon } from "../../assets/icons/house_unit.svg";
import { ReactComponent as OccupantsIcon } from "../../assets/icons/people.svg";
import { ReactComponent as SizeIcon } from "../../assets/icons/size.svg";

interface ItemCardProps {
  item: any;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Card className="align-items-stretch item-card">
      <Card.Img
        variant="top"
        src={
          item.image
            ? item.image
            : require("../../assets/images/house_image_placeholder.png")
        }
      />
      <Card.Body>
        <ListGroup className="rounded-0">
          <ListGroup.Item className="">
            <LocationIcon />
            <Card.Title>{item.location}</Card.Title>
          </ListGroup.Item>
          <ListGroup.Item className="">
            <UnitIcon />
            <p className="list-group-item-key">Total Units:</p>
            <p className="list-group-item-value">{item.units}</p>
          </ListGroup.Item>
          <ListGroup.Item className="">
            <OccupantsIcon />
            <p className="list-group-item-key">Occupancy:</p>
            <p className="list-group-item-value">{item.occupancy}%</p>
          </ListGroup.Item>
          <ListGroup.Item className="">
            <SizeIcon />
            <p className="list-group-item-key">Size:</p>
            <p className="list-group-item-value">{item.size} Sq Ft</p>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="primary" className="footer-btn d-block mx-auto">
          View More Detail
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
