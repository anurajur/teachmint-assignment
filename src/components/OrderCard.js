// src/components/OrderCard.js
import React from "react";
import { useDispatch } from "react-redux";
import { advanceOrder } from "../store/actions";
import {
  calculateTimeInMinutes,
  isOverThreeMinutes,
} from "../utils/calculateTimeDifference";

const OrderCard = ({ order }) => {
  const dispatch = useDispatch();

  const handleAdvance = () => {
    dispatch(advanceOrder(order.id));
  };

  // Calculate time in minutes since the order was placed
  const timeInMinutes = calculateTimeInMinutes(order.placementTime);
  // Check if the order has been in the current stage for more than 3 minutes
  const cardClass =
    isOverThreeMinutes(order.placementTime) && order.status !== "Order Picked"
      ? "highlight-red"
      : "";

  return (
    <div
      className={`order-card ${order.status
        .replace(/\s+/g, "-")
        .toLowerCase()} ${cardClass}`}
    >
      <div className="order-info">
        <p>Order ID: {order.id}</p>
        <p>Status: {order.status}</p>
        {order.status !== "Order Picked" ? (
          <p>Time in current stage: {timeInMinutes}</p>
        ) : (
          <p>Order Picked</p>
        )}
        {order.status !== "Order Picked" && (
          <button onClick={handleAdvance} className="next-button">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
