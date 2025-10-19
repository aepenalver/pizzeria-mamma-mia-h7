import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartProvider";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/RegisterPage";
import ApiProvider from "./context/ApiProvider";

function App() {
  return (
    <>
      {/* Lógica de rutas y componentes que necesitan acceso a la API */}
      <ApiProvider>
        {/* Lógica de rutas y componentes que necesitan acceso al carrito */}
        <CartProvider>
          {/* Define el área donde se van a renderizar los componentes según la URL */}
          <Routes>
            {/* Rutas */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </ApiProvider>
    </>
  );
}

export default App;
