import React from "react";
import { useForm } from "react-hook-form";
import "./AddInventory.css";

const AddInventory = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventories`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("New item added successfully!");
      });
  };
  return (
    <div className="py-5 mt-3">
      <h1 className="fw-bold text-success">Add New Inventory here!</h1>
      <form
        className="d-flex flex-column w-75 mx-auto border-3 rounded-3 shadow-lg p-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="mb-2 style"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2 style"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2 style"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2 style"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2 style"
          placeholder="Image URL"
          type="text"
          {...register("img")}
        />
        <input
          className="mb-2 style"
          placeholder="Supplier"
          type="text"
          {...register("supplier")}
        />
        <input
          type="submit"
          value="Add Inventory"
          className="bg-success text-white fw-bold p-2"
        />
      </form>
    </div>
  );
};

export default AddInventory;
