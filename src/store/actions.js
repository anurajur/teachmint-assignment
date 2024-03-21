// src/store/actions.js
export const ADD_PIZZA = "ADD_PIZZA";
export const ADVANCE_ORDER = "ADVANCE_ORDER";
export const CANCEL_ORDER = "CANCEL_ORDER";

export const addPizza = (pizza) => ({
  type: ADD_PIZZA,
  payload: {
    ...pizza,
    id: Math.random().toString(36).substr(2, 9), // A unique ID for the order
    placementTime: Date.now(), // Current timestamp as placement time
    status: "Order Placed",
  },
});

export const advanceOrder = (orderId) => ({
  type: ADVANCE_ORDER,
  payload: orderId,
});

export const cancelOrder = (id) => ({
  type: CANCEL_ORDER,
  payload: id,
});
