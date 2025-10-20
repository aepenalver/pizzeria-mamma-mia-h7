import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ApiProvider from "./context/ApiContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import UserProvider from "./context/UserContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter: Proporciona la funcionalidad de enrutamiento. */}
    <BrowserRouter>
      {/* UserProvider: Proporciona la funcionalidad de autenticación. */}
      <UserProvider>
        {/* ApiProvider: Proveedor de contexto para la gestión de datos de la API (por ejemplo, pizzas).*/}
        <ApiProvider>
          {/* CartProvider: Proveedor de contexto para la gestión del estado del carrito de compras.*/}
          <CartProvider>
            <App />
          </CartProvider>
        </ApiProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
