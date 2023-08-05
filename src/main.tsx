import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/assets/styles/index.css";
import { generateUsers } from "./shitfuckery/generateUsers";

generateUsers();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
