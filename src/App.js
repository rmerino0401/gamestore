import { BrowserRouter as Router, Switch } from "react-router-dom"
import {Route} from "react-router-dom"
import Routes from "./Routes"
import './App.scss'
// Importamos el componente Navbar 
import NavbarHome from "./components/Navbar"
// Importamos Sidebar
import Sidebar from "./components/Sidebar"
// Paginas de Content 
import ListaProductosView from "./view/ListaProductosView"
import CrearProductoView from "./view/CrearProductoView"
import EditarProductoView from "./view/EditarProductoView"
import InicioView from "./view/InicioView"


export default function App() {
  return (
    <div>
        <Router>
          {/* Cabecera */}
          

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

          {/* Ya no se utiliza el archivo Routes ya que se esta llamando todo desde App.js */}
          {/* <Switch>
            <Routes/>
          </Switch> */}

        </Router>
    </div>
  )
}

