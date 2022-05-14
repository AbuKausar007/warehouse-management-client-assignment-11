import React from "react";
import useInventory from "../hooks/useInventory/useInventory";
import InventoryTable from "../InventoryTable/InventoryTable";

const ManageInventories = () => {
  const { items } = useInventory();
  return (
    <div className="py-5 mt-3">
      <h1 className="fw-bold text-success">Manage All Inventories</h1>
      <section>
        {items.map((item) => (
          <InventoryTable key={item._id} item={item}></InventoryTable>
        ))}
      </section>
    </div>
  );
};

export default ManageInventories;
