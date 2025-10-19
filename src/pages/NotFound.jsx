import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  // Inicialización del hook para redirigir al usuario cuando hace clic en el botón
  const navigate = useNavigate();

  return (
    <>
      <Container className="d-flex justify-content-center p-5">
        <Alert variant="danger" className="w-75">
          <Alert.Heading className="fs-2 text-center my-3">¡Algo salió mal!</Alert.Heading>
          <p className="fs-3">La ruta a la que intentas ingresar no existe.</p>
          <hr />
          <div className="d-flex justify-content-end">
            {/* Botón que "usa navigate("/")" para llevar al usuario al "Home" */}
            <Button onClick={() => navigate("/")} variant="outline-danger">
              Regresar
            </Button>
          </div>
        </Alert>
      </Container>
    </>
  );
};

export default NotFound;
