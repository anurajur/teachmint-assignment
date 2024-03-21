// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import PizzaForm from "./components/PizzaForm";
import PizzaStages from "./components/PizzaStages";
import MainSection from "./components/MainSection";

function App() {
  return (
    <Provider store={store}>
      <div className="App grid-container">
        <PizzaForm />
        <PizzaStages />
        <MainSection />
      </div>
    </Provider>
  );
}

export default App;
