import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavTop() {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">GameStore</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Consolas</Nav.Link>
        <Nav.Link href="#link">Juegos</Nav.Link>
        <Nav.Link href="#link">Accesorios</Nav.Link>
        {/* Llamamos a ProductosView */}
        <Nav.Link>
          <Link to="/productos">Productos
          </Link>
        </Nav.Link>

        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Acción</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Aventura</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">ojala no nos jalen</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Si se puede</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">el 22 dormiré todo el día</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Novedades</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
