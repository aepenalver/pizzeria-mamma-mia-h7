import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import NavMenu from "../components/Navbar";
import { useCart } from "../context/CartContext";
import convertedAmount from "../utils/convert";

const Cart = () => {
  const { pizzas, total, updateQty } = useCart();

  return (
    <>
      <NavMenu />
      <div className="d-flex justify-content-center align-items-center p-5">
        <Container className="container-cart m-0">
          <h1>Detalles del pedido:</h1>
          <Container className="container-cart-detail d-flex flex-column gap-2 mt-3 mb-4 p-0">
            {/* Renderizado condicional: Muestra un mensaje si el array de pizzas está vacío. */}
            {pizzas.length === 0 ? (
              <Alert key="danger" variant="danger">
                Tu carrito está vacío 🛒
              </Alert>
            ) : (
              // Map de "pizzas" obtenidas del contexto.
              pizzas.map((pizza) => (
                <Row className="d-flex align-items-center gap-3" key={pizza.id}>
                  <Col xs={1}>
                    <Image className="img-cart" src={pizza.img} alt={pizza.name} rounded />
                  </Col>
                  <Col xs={3} className="m-0 ps-3">
                    {/* Título de la pizzacon primera letra del nombre en mayúscula */}
                    {pizza.name.charAt().toUpperCase() + pizza.name.slice(1)}
                  </Col>
                  {/* Total ítem formateado */}
                  <Col className="m-0 text-end">${convertedAmount(pizza.price * pizza.qty)}</Col>
                  <Col xs={1} className="p-0 text-center">
                    {/* Botón Decrementar: Llama a la función del contexto con -1. */}
                    <Button variant="outline-danger" onClick={() => updateQty(pizza.id, -1)}>
                      -
                    </Button>
                  </Col>
                  <Col xs={1} className="m-0 text-center p-0">
                    {/* Muestra la cantidad actual. */}
                    {pizza.qty}
                  </Col>
                  <Col xs={1} className="p-0 text-center">
                    {/* Botón Incrementar: Llama a la función del contexto con +1. */}
                    <Button variant="outline-info" onClick={() => updateQty(pizza.id, 1)}>
                      +
                    </Button>
                  </Col>
                </Row>
              ))
            )}
          </Container>
          {/* "Total" formateado */}
          <p className="fs-3 fw-bold">Total: ${convertedAmount(total)}</p>
          {/* Botón deshabilitado si no hay ítems. */}
          <Button variant="dark" disabled={pizzas.length === 0}>
            Pagar
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Cart;
