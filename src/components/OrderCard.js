import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { advanceOrder } from "../store/actions";
import {
  calculateTimeInMinutesAndSeconds,
  isOverThreeMinutes,
} from "../utils/calculateTimeDifference";

const OrderCard = ({ order }) => {
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Clear interval on component unmount
  }, []);

  const handleAdvance = () => {
    dispatch(advanceOrder(order.id));
  };

  const timeInMinutesAndSeconds = calculateTimeInMinutesAndSeconds(
    order.placementTime,
    currentTime
  );
  const cardClass = isOverThreeMinutes(order.placementTime, currentTime)
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
          <p>Time in current stage: {timeInMinutesAndSeconds}</p>
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
