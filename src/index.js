import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./services/AuthContext";
import { FilterProvider } from "./services/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <FilterProvider>
    <App />
    </FilterProvider>
  </AuthProvider>
);
