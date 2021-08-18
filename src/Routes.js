// Creamos un componente para react 
import {Route} from "react-router-dom" // La desestructuración de los atributos del objetos es de la libreria de Routes
// paginas
import ListaProductosView from "./view/ListaProductosView"
import CrearProductoView from "./view/CrearProductoView"
import EditarProductoView from "./view/EditarProductoView"
import InicioView from "./view/InicioView"
import Sidebar from "./components/Sidebar"
//Style
import './App.scss'

export default function Routes() {
    return (
        <div>
            {/* <Route path="/" exact component={Sidebar}/>
            <Route path="/Inicio" exact component={InicioView}/>
            <Route path="/List" exact component={ListaProductosView}/>
            <Route path="/new" exact component={CrearProductoView}/>
            <Route path="/update/:id" exact component={EditarProductoView}/> */}

        </div>
    )
}
