import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CounterProvider } from "./context/Counter";
import { CartProvider } from "./context/Cart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </CartProvider>
  </StrictMode>
);

// Now CounterProvider is wrapping around App..which means its wrapping around everything...
