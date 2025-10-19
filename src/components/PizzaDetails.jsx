import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useCart } from "../context/CartProvider";
import convertedAmount from "../utils/convert";

const PizzaDetails = (props) => {
  // Consumir función "addToCart" del contexto
  const { addToCart } = useCart();

  // Función que prepara el objeto de pizza y lo añade al "Cart"
  const handleAddToCart = () => {
    // Objeto de pizza con las propiedades que espera "CartProvider"
    const pizzaToAdd = {
      id: props.id,
      name: props.name,
      price: props.price,
      img: props.img,
    };
    // Llamada a  función del contexto para agregar la pizza al estado global.
    addToCart(pizzaToAdd);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Container className="container-cart m-0">
        <Card className="container p-0">
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            {/* Título de la pizza con primera letra del nombre en mayúscula */}
            <Card.Title>Pizza {props.name?.charAt().toUpperCase() + props.name?.slice(1)}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            {/* Lista de ingredientes separados con coma */}
            <Card.Text className="m-0 fs-5 fw-light">Ingredientes: {props.ingredients?.join(", ")}</Card.Text>
            {/* Precio formateado */}
            <p className="fs-4 fw-bold pt-2 text-center">Precio: ${convertedAmount(props.price)}</p>
            <Button className="d-block ms-auto" variant="dark" onClick={handleAddToCart}>
              Añadir 🛒
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default PizzaDetails;
