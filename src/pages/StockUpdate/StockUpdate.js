import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const StockUpdate = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  const [isReload, setIsReload] = useState(false);

  const navigate = useNavigate();
  const manageInventories = () => {
    navigate("/manageInventories");
  };

  useEffect(() => {
    const url = `http://localhost:5000/inventories/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [isReload]);

  const handleAddQuantity = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    const newQuantity = parseInt(quantity) + parseInt(inventory?.quantity);
    console.log(newQuantity);
    const updateItem = { newQuantity };
    if (!quantity) {
      alert("Please enter quantity number.");
    } else {
      const url = `http://localhost:5000/inventories/${id}`;

      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateItem),
      })
        .then((res) => res.json())
        .then((data) => {
          // setInventory(data);
          setIsReload(!isReload);
          event.target.reset();
        });
    }
  };

  /*const handleDelivered = () => {
    let { quantity } = inventory;
    if (quantity > 0) {
      quantity = quantity - 1;
      const updateQuantity = { quantity };
      const url = `http://localhost:5000/inventories/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsReload(!isReload);
        });
    }
  }; */

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
        <div className="col-lg-6 col-sm-12 ">
          <h3 className="fw-bold pt-5">You can increase your quantity here!</h3>
          <form onSubmit={handleAddQuantity}>
            <input
              type="number"
              name="quantity"
              placeholder="Enter quantity amount"
              required
              style={{
                height: "40px",
                width: "100%",
                fontSize: "18px",
                borderRadius: "7px",
                border: "2px solid green",
                margin: "10px",
              }}
            />{" "}
            <br />
            <input
              type="submit"
              value="Add Quantity"
              className=" mb-2 bg-success text-white py-2 px-3 rounded-3"
            />
          </form>
          <h3 className="fw-bold pt-5 pb-2">You Can Go To Manage Inventory!</h3>
          <button
            onClick={manageInventories}
            className=" text-decoration-none btn btn-success fw-bold border-4 rounded-3 shadow-lg w-50"
          >
            Manage Inventories
          </button>
        </div>
      </section>
    </div>
  );
};

export default StockUpdate;
