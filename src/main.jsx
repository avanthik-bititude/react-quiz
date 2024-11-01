import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ResultContextProvider } from "./context/resultContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResultContextProvider>
      <App />
    </ResultContextProvider>
  </StrictMode>
);
