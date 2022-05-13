import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const InventoryUpdate = (item) => {
  const { name, price, img, quantity, description, supplier } = item;
  return (
    <div>
      <h1>inventory update</h1>
      <Card className="w-75 d-block mx-auto">
        <Card.Img className="img-fluid " variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold text-success display-6">
            {name}
          </Card.Title>
          <Card.Text className="text-start">{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="fw-bold h2 text-danger">
            Price: ${price}
          </ListGroupItem>
          <ListGroupItem className="fw-bold h4 text-success">
            Quantity: {quantity}
          </ListGroupItem>
          <ListGroupItem className="fw-bold h6 text-secondary">
            Supplier: {supplier}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <button className="btn btn-warning">Deliverd</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InventoryUpdate;
