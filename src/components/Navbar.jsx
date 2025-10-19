import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartProvider";
import convertedAmount from "../utils/convert";

const NavMenu = () => {
  // Consumir el contexto para obtener el total de la compra
  const { total } = useCart();

  // Variable autenticación
  const token = false;

  // Inicialización de hook para manejar la navegación
  const navigate = useNavigate();

  return (
    <Navbar className="bg-dark">
      <Container fluid className="m-1 gap-2">
        {/* Logo y enlace a "home" */}
        <Navbar.Brand as={Link} to="/" className="text-light fs-4 fw">
          Pizzería Mamma Mia!
        </Navbar.Brand>

        <Button variant="outline-light" onClick={() => navigate("/")}>
          🍕 Home
        </Button>

        {/* Renderizado Condicional: Muestra botones de "Profile" y "Logout" si hay token */}
        {token ? (
          <>
            <Button variant="outline-light" onClick={() => navigate("/profile")}>
              🔓 Profile
            </Button>
            <Button variant="outline-light">🔒 Logout</Button>
          </>
        ) : (
          <>
            {/* Muestra botones de "Login" y "Register" si no hay token */}
            <Button variant="outline-light" onClick={() => navigate("/login")}>
              🔐 Login
            </Button>
            <Button variant="outline-light" onClick={() => navigate("/register")}>
              🔐 Register
            </Button>
          </>
        )}
        {/* Botón del carrito actualizado con dato "Total" del contexto */}
        <Button className="ms-auto" variant="outline-info" onClick={() => navigate("/cart")}>
          {/* Total formateado */}
          🛒 Total: ${convertedAmount(total)}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
