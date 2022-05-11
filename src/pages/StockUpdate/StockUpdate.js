import React from "react";
import { useParams } from "react-router-dom";

const StockUpdate = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>stock update page</h1>
      <h2>item id is: {id}</h2>
    </div>
  );
};

export default StockUpdate;
