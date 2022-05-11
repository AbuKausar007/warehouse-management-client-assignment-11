import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const SingleInventory = ({ item }) => {
  const { _id, name, price, img, quantity, description, supplier } = item;
  const navigate = useNavigate();
  const navigateToStockUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div>
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
          {/* <Card.Link as={Link} to="/updateStock" className="btn btn-danger">
            Stock Update
          </Card.Link> */}
          <button
            onClick={() => navigateToStockUpdate(_id)}
            className="btn btn-danger"
          >
            Stock Update
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleInventory;
