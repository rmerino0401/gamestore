import { BrowserRouter as Router, Switch } from "react-router-dom"
import {Route} from "react-router-dom"
import Routes from "./Routes"
import NavTop from "./components/NavTop"
import { AuthContextProvider } from "./context/authContext"
import CarritoContextProvider  from "./context/carritoContext"
//Import de Vistas del Administrador

import './App.scss'
import NavbarHome from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import ListaProductosView from "./view/ListaProductosView"
import CrearProductoView from "./view/CrearProductoView"
import EditarProductoView from "./view/EditarProductoView"
import InicioView from "./view/InicioView"






export default function App() {
  return (
    <div>
    {/* <Router>
          <div className="flex">
            <Sidebar />  
            <div className="content w-100">
              <NavbarHome />
              <Route path="/" exact component={InicioView}/>
              <Route path="/List" exact component={ListaProductosView}/>
              <Route path="/new" exact component={CrearProductoView}/>
              <Route path="/update/:id" exact component={EditarProductoView}/>
            </div>
          </div> 
        </Router> */}

        {/* Comentar Para que se muestre el lado Administrador */}
        <Router>
          <AuthContextProvider>
            <CarritoContextProvider>
            <div className="container p-3">
              <NavTop/>
                <Switch>
                  <Routes/>
                </Switch>
            </div> 
            </CarritoContextProvider>
          </AuthContextProvider>
        </Router> 
  </div>
  )
}

