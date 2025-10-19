import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import user1 from "../assets/img/user1.png";

const Profile = () => {
  return (
    <>
      <section className="d-flex justify-content-center align-items-center p-5">
        <Form className="w-50">
          <h1 className="mb-5">Profile</h1>
          <Figure>
            <Figure.Image width={171} height={180} alt="171x180" src={user1} thumbnail />
          </Figure>
          <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
            <Form.Label column sm={2} className="fw-bold">
              Usuario
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" name="user" placeholder="Nombre de Usuario" disabled />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2} className="fw-bold">
              Email
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="email" name="email" placeholder="nombre-de-usuario@mail.com" disabled />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="dark" type="submit">
                🔐 Cerrar sesión
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </section>
    </>
  );
};

export default Profile;
