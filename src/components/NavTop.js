import { Navbar, Container, Nav, NavDropdown, } from "react-bootstrap"
import {Link} from "react-router-dom"

export default function NavTop() {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
  <Container>
    <Navbar.Brand href="#home">
    Gamestore
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link>
        <Link to="/">
          Inicio
        </Link>
        </Nav.Link>
        <Nav.Link>
        <Link to="/tienda">
          Tienda
        </Link>
        </Nav.Link>
        <Nav.Link>
        <Link to="/carrito">
          carrito
        </Link>
        </Nav.Link>

        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Consolas</Nav.Link>
        <Nav.Link href="#link">Juegos</Nav.Link>
        <Nav.Link href="#link">Accesorios</Nav.Link>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Acción</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Aventura</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">lorem ipsum1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">lorem ipsum2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">lorem ipsum3</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Novedades</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
