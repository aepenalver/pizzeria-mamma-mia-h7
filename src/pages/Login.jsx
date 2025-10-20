import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useUser } from "../context/UserContext";

const Login = () => {
  // Estado para almacenar el valor del campo de email
  const [email, setEmail] = useState("");
  // Estado para almacenar el valor del campo de contraseña
  const [password, setPassword] = useState("");

  const { setToken } = useUser();

  // Función que se ejecuta al enviar el formulario (onSubmit)
  const handleSubmit = (e) => {
    // Previene el comportamiento por defecto del formulario (recarga de página)
    e.preventDefault();
    setToken({ email, password });

    // Validación de campos vacíos: Verifica si el email o la contraseña están vacíos
    if (!email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Expresión regular para validar el formato básico de un email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación de formato de email.
    if (!regexEmail.test(email)) {
      alert("El email no tiene un formato válido");
      return;
    }

    // Validación de longitud de la contraseña (debe ser al menos 6 caracteres)
    if (password.length <= 5) {
      alert("La contraseña debe contener al menos 6 dígitos");
      return;
    }

    alert(`¡Bienvenido ${email}!`);
    setEmail("");
    setPassword("");
  };

  return (
    <section className="d-flex justify-content-center align-items-center p-5">
      <Form className="w-50" onSubmit={handleSubmit}>
        <h1 className="mb-5">Login</h1>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2} className="fw-bold">
            Email
          </Form.Label>
          <Col sm={8}>
            {/* Input controlado: su valor se actualiza en el estado "email" con cada cambio */}
            <Form.Control type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
          <Form.Label column sm={2} className="fw-bold">
            Contraseña
          </Form.Label>
          <Col sm={8}>
            {/* Input controlado: su valor se actualiza en el estado "password" */}
            <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="dark" type="submit">
              Enviar
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </section>
  );
};

export default Login;
