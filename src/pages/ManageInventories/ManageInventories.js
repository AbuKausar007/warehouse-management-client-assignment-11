import React from "react";
import useInventory from "../hooks/useInventory/useInventory";
import Table from "react-bootstrap/Table";

const ManageInventories = () => {
  const { items, setItems } = useInventory();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/inventories/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div className="py-5 mt-3">
      <h1 className="fw-bold text-success">Manage All Inventories</h1>
      <section>
        {items.map((item) => (
          <div key={item._id}>
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
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <img src={item.img} alt="" width={100} />
                  </td>
                  <td>{item.supplier}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-danger fw-bold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ManageInventories;
