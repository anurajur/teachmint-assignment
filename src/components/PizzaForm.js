// components/PizzaForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../store/actions";

const PizzaForm = () => {
  const dispatch = useDispatch();
  const maxOrders = 10;
  const orders = useSelector((state) => state.orders);
  const [formData, setFormData] = useState({
    type: "Veg",
    size: "Large",
    base: "Thick",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (orders.length < maxOrders) {
      dispatch(addPizza(formData));
    } else {
      alert("Not taking any order for now");
    }
  };

  return (
    <div className="pizza-form grid-item">
      {" "}
      {/* Updated with grid-item */}
      <h2>Pizza Order Form</h2>
      <div>
        <label>
          Type:
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Size:
          <select name="size" value={formData.size} onChange={handleChange}>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Base:
          <select name="base" value={formData.base} onChange={handleChange}>
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
          </select>
        </label>
      </div>
      <button onClick={handleSubmit}>Place Order</button>
    </div>
  );
};

export default PizzaForm;
