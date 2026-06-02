import { store } from "./redux/store";
import { Provider } from "react-redux";
import { useState } from "react";
import Value from "./components/Value";
import ButtonIncrement from "./components/ButtonIncrement";
import ButtonDecrement from "./components/ButtonDecrement";

function App() {
  return (
    <Provider store={store}>
      <Value />
      <ButtonIncrement />
      <ButtonDecrement />
    </Provider>
  );
}

export default App;
