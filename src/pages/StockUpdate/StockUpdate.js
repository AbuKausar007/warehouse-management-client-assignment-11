import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";

const StockUpdate = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventories/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return (
    <div className="container d-grid mt-5 pt-3 pb-5">
      <h1 className="fw-bold text-success pb-2">
        Stock update item is: {inventory.name}
      </h1>
      <section className="row">
        <div className=" col-lg-6 col-sm-12">
          <Card className="w-75 d-block mx-auto">
            <Card.Img className="img-fluid" variant="top" src={inventory.img} />
            <Card.Body>
              <Card.Title className="fw-bold text-success display-6">
                {inventory.name}
              </Card.Title>
              <Card.Text className="text-start">
                {inventory.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="fw-bold h2 text-danger">
                Price: ${inventory.price}
              </ListGroupItem>
              <ListGroupItem className="fw-bold h4 text-success">
                Quantity: {inventory.quantity}
              </ListGroupItem>
              <ListGroupItem className="fw-bold h6 text-secondary">
                Supplier: {inventory.supplier}
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <button className="btn btn-warning">Deliverd</button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1>tmi</h1>
        </div>
      </section>
    </div>
  );
};

export default StockUpdate;
