import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrder } from "../store/actions";
import { calculateTimeInMinutes } from "../utils/calculateTimeDifference";

const MainSection = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  // Calculate the total number of delivered pizzas
  const totalDelivered = orders.filter(
    (order) => order.status === "Order Picked"
  ).length;

  const handleCancel = (id) => {
    dispatch(cancelOrder(id));
  };

  return (
    <div className="main-section">
      <h2>Main Section</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Stage</th>
            <th>Total Time Spent (from order placed)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className={order.status === "Order Picked" ? "order-picked" : ""}
            >
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>
                {order.status !== "Order Picked"
                  ? calculateTimeInMinutes(order.placementTime)
                  : "Order Completed"}
              </td>
              <td>
                {order.status !== "Order Picked" && (
                  <button
                    onClick={() => handleCancel(order.id)}
                    className="cancel-button"
                  >
                    Cancel
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-delivered">
        Total order delivered: {totalDelivered}
      </div>
    </div>
  );
};

export default MainSection;
