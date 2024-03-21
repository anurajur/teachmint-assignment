// reducer.js
import { ADD_PIZZA, ADVANCE_ORDER, CANCEL_ORDER } from "./actions";

const initialState = {
  orders: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      const newOrder = {
        ...action.payload,
        status: "Order Placed",
        timePlaced: Date.now(), // Store the timestamp instead of remainingTime
      };
      return {
        ...state,
        orders: [...state.orders, newOrder],
      };
    case ADVANCE_ORDER:
      return {
        ...state,
        orders: state.orders.map((order) => {
          if (order.id === action.payload) {
            let newStatus;
            switch (order.status) {
              case "Order Placed":
                newStatus = "Order in Making";
                break;
              case "Order in Making":
                newStatus = "Order Ready";
                break;
              case "Order Ready":
                newStatus = "Order Picked";
                break;
              default:
                newStatus = order.status;
            }
            return { ...order, status: newStatus };
          } else {
            return order;
          }
        }),
      };
    case CANCEL_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
