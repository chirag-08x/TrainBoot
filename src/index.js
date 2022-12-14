import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { AppProvider } from "./context/AppContext";

const Index = () => {
  return (
    <AppProvider>
      <App />;
    </AppProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
