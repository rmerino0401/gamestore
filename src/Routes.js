// Creamos un componente para react 
import {Route} from "react-router-dom" // La desestructuración de los atributos del objetos es de la libreria de Routes
import ListaProductosView from "./view/ListaProductosView"
import CrearProductoView from "./view/CrearProductoView"
import EditarProductoView from "./view/EditarProductoView"
import ProductoView from "./view/ProductoView"
import PortadaView from "./view/PortadaView"
import ProductosView from "./view/ProductosView"
import CarritoView from "./view/CarritoView"

export default function Routes() {
    return (
        <div>
            {/* //Rutas de Victor */}
            <Route path="/Admin" exact component={ListaProductosView}/>
            <Route path="/new" exact component={CrearProductoView}/>
            <Route path="/update/:id" exact component={EditarProductoView}/>
            {/* // Rutas de Roberto */}
            <Route path="/" exact component={PortadaView} />
            <Route path="/detalle/:id" exact component={ProductoView} />
            <Route path="/productos" exact component={ProductosView} />
            <Route path="/carrito" exact component={CarritoView} />
        
        </div>
    )
}
