import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UAProvider } from "./context/UAContext";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UAProvider>
      <App />
    </UAProvider>
  </StrictMode>
);
