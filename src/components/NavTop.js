import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { CarritoContext } from "../context/carritoContext";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import Badge from "@material-ui/core/Badge";

export default function NavTop() {
    const { carrito } = useContext(CarritoContext);
    const {userState, signOut} = useContext(AuthContext)

    const totalCarrito = carrito.reduce((total, item) => {
      return total + item.cantidad;
    }, 0);
    
    return (
        <Navbar bg="light" fluid="lg" sticky="top" >
  <Container >
    <Navbar.Brand href="#home">
    Gamestore
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link ><Link to="/">Inicio</Link></Nav.Link>
        <Nav.Link><Link to="/productos">Productos</Link></Nav.Link>

        <Nav.Link><Link to="/Inicio">Admin</Link></Nav.Link>
        {/* <Nav.Link href="#link">Consolas</Nav.Link>
        <Nav.Link href="#link">Juegos</Nav.Link> */}
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

        {/* <Link className="nav-link" to="/carrito">
							Carrito
							<Badge badgeContent={totalCarrito} color="primary">
								<ShoppingCartIcon />
							</Badge>
						</Link>

						<Link className="nav-link" to="/checkout">Comprar!</Link> */}

        
        
        
        
      </Nav>

      <Nav>
    
        
        
      <Nav.Link>
          <Link className="nav-link" to="/checkout">
                Comprar
                {/* <Badge badgeContent={totalCarrito} color="primary">
                  <ShoppingCartIcon />
                </Badge> */}
          </Link>
        </Nav.Link>

        <Nav.Link>
          <Link className="nav-link" to="/carrito">
                Carrito
                <Badge badgeContent={totalCarrito} color="primary">
                  <ShoppingCartIcon />
                </Badge>
          </Link>
        </Nav.Link>



        <Nav.Link>
            {userState ? (

            // <Nav.Link>
            //   <span onClick={signOut}>Salir</span>
            // </Nav.Link>

            <NavDropdown
            title={
              <div className="d-inline">
                <img
                  src={userState.photoURL}
                  className="me-2"
                  style={{ borderRadius: "50%", width: "30px" }}
                  alt="avatar"
                />
                <span>{userState.displayName}</span>
              </div>
            }
            >
            <NavDropdown.Item onClick={signOut}>Salir</NavDropdown.Item>
            </NavDropdown>

            ):(

            <Nav.Link>
              <Link to="/login">Iniciar Sesion</Link>
            </Nav.Link>

            )
            }
        </Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
