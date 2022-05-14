import React from "react";
import Table from "react-bootstrap/Table";

const InventoryTable = ({ item }) => {
  const { name, price, quantity, img, supplier } = item;
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>supplier</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
              <img src={img} alt="" width={100} />
            </td>
            <td>{supplier}</td>
            <td>
              <button className="btn btn-danger fw-bold">Delete</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default InventoryTable;
