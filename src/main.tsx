import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/assets/styles/index.css";
import { generateGuilds, generatePosts, generateUsers } from "./utils/generate";

generateUsers();
generatePosts();
generateGuilds();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
