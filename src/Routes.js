// Creamos un componente para react 
import {Route} from "react-router-dom" // La desestructuración de los atributos del objetos es de la libreria de Routes

// Paginas Victor
import './App.scss'
import NavbarHome from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import ListaProductosView from "./view/ListaProductosView"
import CrearProductoView from "./view/CrearProductoView"
import EditarProductoView from "./view/EditarProductoView"
import InicioView from "./view/InicioView"
import LoginView from "./view/LoginView"
import ProtectedRoute from './components/ProtectedRoute'
import CheckoutView from "./view/CheckoutView"

// paginas Roberto
import ProductoView from "./view/ProductoView"
import PortadaView from "./view/PortadaView"
import ProductosView from "./view/ProductosView"
import CarritoView from "./view/CarritoView"

export default function Routes() {
    return (
        <div>
            {/* Lado Usuario - Ventas */}
            <Route path="/" exact component={PortadaView} />
            <Route path="/detalle/:id" exact component={ProductoView} />
            <Route path="/productos" exact component={ProductosView} />

            {/* Lado Administrativo */}
            <Route path="/login" exact component={LoginView} />
            <ProtectedRoute path="/carrito" exact component={CarritoView} />
            <ProtectedRoute path="/checkout" exact component={CheckoutView}/>
            
            <div className="flex">
                {/* quitar el comentario cuando toque el lado administrativo */}
                <Sidebar />  
                <div className="content w-100">
                {/* <NavbarHome /> */}
                    <Route path="/Inicio" exact component={InicioView}/>
                    <Route path="/List" exact component={ListaProductosView}/>
                    <Route path="/new" exact component={CrearProductoView}/>
                    <Route path="/update/:id" exact component={EditarProductoView}/>
                </div>
            </div> 

        </div>
    )
}
