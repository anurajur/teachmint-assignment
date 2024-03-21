// src/components/PizzaStages.js
import React from "react";
import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";

const PizzaStages = () => {
  const orders = useSelector((state) => state.orders);
  const stages = [
    "Order Placed",
    "Order in Making",
    "Order Ready",
    "Order Picked",
  ];

  return (
    <div className="pizza-stages">
      {stages.map((stage) => (
        <div
          key={stage}
          className={`stage ${stage.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <h3>{stage}</h3>
          {orders
            .filter((order) => order.status === stage)
            .map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default PizzaStages;
