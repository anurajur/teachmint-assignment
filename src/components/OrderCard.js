import React from "react";
import { useDispatch } from "react-redux";
import { advanceOrder } from "../store/actions";
import { calculateTimeDifference } from "../utils/calculateTimeDifference";

const OrderCard = ({ order }) => {
  const dispatch = useDispatch();
  const timePassed = calculateTimeDifference(order.timePlaced);
  const handleAdvance = (orderId) => {
    dispatch(advanceOrder(orderId));
  };

  if (!order || !order.status) {
    return null; // or some fallback UI
  }

  const statusClass = order.status.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className={`order-card ${statusClass}`}>
      <div className="order-info">
        <p>Order {order.id}</p>
        <p>{timePassed}</p>
      </div>
      {order.status !== "Order Picked" && (
        <button onClick={() => handleAdvance(order.id)} className="next-button">
          Next
        </button>
      )}
    </div>
  );
};

export default OrderCard;
