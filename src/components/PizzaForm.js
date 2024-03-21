// src/components/PizzaForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../store/actions";

const PizzaForm = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const [formData, setFormData] = useState({
    type: "Veg",
    size: "Large",
    base: "Thick",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orders.length < 10) {
      dispatch(addPizza(formData));
    } else {
      alert("Not taking any more orders for now.");
    }
  };

  return (
    <form className="pizza-form" onSubmit={handleSubmit}>
      {/* Form fields for type, size, and base */}
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
      <button type="submit">Place Order</button>
    </form>
  );
};

export default PizzaForm;
