import { ADD_PIZZA, ADVANCE_ORDER, CANCEL_ORDER } from "./actions";

const initialState = {
  orders: [],
};

const getNextStatus = (currentStatus) => {
  const statusFlow = [
    "Order Placed",
    "Order in Making",
    "Order Ready",
    "Order Picked",
  ];
  const currentIndex = statusFlow.indexOf(currentStatus);
  return currentIndex !== -1 && currentIndex < statusFlow.length - 1
    ? statusFlow[currentIndex + 1]
    : currentStatus;
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      return {
        ...state,
        orders: [
          ...state.orders,
          {
            ...action.payload,
            status: "Order Placed",
            placementTime: Date.now(), // Ensure this is a valid timestamp
            lastStatusChange: Date.now(), // Initialize with current timestamp
          },
        ],
      };
    case ADVANCE_ORDER:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload
            ? {
                ...order,
                status: getNextStatus(order.status),
                lastStatusChange: Date.now(), // Update timestamp on status change
              }
            : order
        ),
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
