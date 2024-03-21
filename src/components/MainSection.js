import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelOrder } from "../store/actions";
import { calculateTimeDifference } from "../utils/calculateTimeDifference";
// ... existing imports ...

const MainSection = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

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
            <th>Total time spent (from order placed)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.stage}</td>
              <td>{calculateTimeDifference(order.timePlaced)}</td>
              <td>
                {order.stage !== "Order Picked" && (
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
        <strong>Total order delivered: </strong>
        {orders.filter((order) => order.stage === "Order Picked").length}
      </div>
    </div>
  );
};

export default MainSection;
