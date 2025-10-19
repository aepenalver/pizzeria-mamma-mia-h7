import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterPage = () => {
  // Estado para almacenar el valor del campo Email
  const [email, setEmail] = useState("");
  // Estado para almacenar el valor del campo Contraseña
  const [password, setPassword] = useState("");
  // Estado para almacenar el valor del campo Confirmar Contraseña
  const [confirmPassword, setConfirmPassword] = useState("");

  // Función que se ejecuta al enviar el formulario (onSubmit)
  const validarInputs = (e) => {
    // Evita que la página se recargue al enviar el formulario
    e.preventDefault();

    // Validación de campos vacíos
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Expresión regular para validar el formato básico del email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación de formato de Email
    if (!regexEmail.test(email)) {
      alert("El email ingresado no tiene un formato válido");
      return;
    }

    // Validación de longitud de Contraseña (mínimo 6 caracteres)
    if (password.length <= 5) {
      alert("La contraseña debe contener al menos 6 dígitos");
      return;
    }

    // Validación de coincidencia de Contraseñas
    if (password !== confirmPassword) {
      alert("Las contraseñas deben ser idénticas");
      return;
    }

    alert("¡Registro Exitoso!");
    // Limpiar el formulario
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <section className="d-flex justify-content-center align-items-center p-5">
      {/* Llamada a Función (onSubmit) */}
      <Form className="w-50" onSubmit={validarInputs}>
        <h1 className="mb-5">Registro</h1>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="fw-bold">Email</Form.Label>
          {/* setEmail..: Actualiza el estado "email" */}
          {/* value={email}: Controla el valor del input con el estado */}
          <Form.Control type="email" placeholder="Ingrese su email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="fw-bold">Contraseña</Form.Label>
          {/* setPassword...: Actualiza el estado "password" */}
          {/* value={password}: Controla el valor del input con el estado */}
          <Form.Control type="password" placeholder="Establezca su contraseña" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupConfirmPassword">
          <Form.Label className="fw-bold">Confirmar Contraseña</Form.Label>
          {/* setPassword...: Actualiza el estado "confirmPassword" */}
          {/* value={confirmPassword}: Controla el valor del input con el estado */}
          <Form.Control type="password" placeholder="Confirme su contraseña" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Enviar
        </Button>
      </Form>
    </section>
  );
};

export default RegisterPage;
