// redux/actions.js
export const ADD_PIZZA = "ADD_PIZZA";
export const ADVANCE_ORDER = "ADVANCE_ORDER";
export const CANCEL_ORDER = "CANCEL_ORDER";

export const addPizza = (pizza) => ({
  type: ADD_PIZZA,
  payload: pizza,
});

// export const advanceOrder = (id) => ({
//   type: ADVANCE_ORDER,
//   payload: id,
// });

export const advanceOrder = (orderId) => {
  return {
    type: ADVANCE_ORDER,
    payload: orderId, // This should be the ID of the order to advance
  };
};

export const cancelOrder = (id) => ({
  type: CANCEL_ORDER,
  payload: id,
});
