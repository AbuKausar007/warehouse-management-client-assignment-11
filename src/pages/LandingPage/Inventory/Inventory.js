import React from "react";
import { Link } from "react-router-dom";
import useInventory from "../../hooks/useInventory/useInventory";
import SingleInventory from "../SingleInventory/SingleInventory";
import "./Inventory.css";

const Inventory = () => {
  const { items } = useInventory();
  const sixItems = items.slice(0, 6);
  return (
    <div>
      <section className="container pt-lg-3 pt-sm-2 pb-5">
        <h1 className="fw-bold text-danger pb-4">
          All Inventory Items I Have!
        </h1>
        <div className=" sixItems ">
          {sixItems.map((item) => (
            <SingleInventory key={item._id} item={item}></SingleInventory>
          ))}
        </div>
      </section>
      <Link
        to="manageInventories"
        className=" text-decoration-none btn btn-success fw-bold border-4 rounded-3 shadow-lg w-25"
      >
        Manage Inventories
      </Link>
    </div>
  );
};

export default Inventory;
