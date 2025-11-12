import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppKit  } from "./provider/appkit.jsx";
import "./index.css";
 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppKit>
      <App />
    </AppKit>
  </React.StrictMode>
);
