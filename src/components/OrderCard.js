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
    let intervalId;
    if (order.status !== "Order Picked") {
      intervalId = setInterval(() => {
        setCurrentTime(Date.now());
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [order.status]);

  const handleAdvance = () => {
    dispatch(advanceOrder(order.id));
  };

  const timeInMinutesAndSeconds = calculateTimeInMinutesAndSeconds(
    order.lastStatusChange,
    currentTime
  );
  const overThreeMinutes = isOverThreeMinutes(
    order.lastStatusChange,
    currentTime
  );
  const cardClass =
    overThreeMinutes && order.status !== "Order Picked" ? "highlight-red" : "";

  return (
    <div
      className={`order-card ${order.status
        .replace(/\s+/g, "-")
        .toLowerCase()} ${cardClass}`}
    >
      <div className="order-info">
        <p>Order ID: {order.id}</p>
        <p>Time in current stage: {timeInMinutesAndSeconds}</p>
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
