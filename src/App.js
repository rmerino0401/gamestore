import { BrowserRouter as Router, Switch } from "react-router-dom"
import {Route} from "react-router-dom"
import Routes from "./Routes"
import NavTop from "./components/NavTop"

import './App.scss'
// import NavbarHome from "./components/Navbar"
// import Sidebar from "./components/Sidebar"
import ListaProductosView from "./view/ListaProductosView"
import CrearProductoView from "./view/CrearProductoView"
import EditarProductoView from "./view/EditarProductoView"
import InicioView from "./view/InicioView"


export default function App() {
  return (
    <div>
<<<<<<< HEAD
      <header>Esta es la cabezera </header>
      <nav>Este es el Navegador</nav>
      <section> 
        {/* <h1>Hola Mundo (RamaV)</h1> */}
        
        <Router>
          <div className="container p-3">
            <Switch>
              <Routes/>
            </Switch>
          </div>
=======
    <Router>
          <div className="flex">
            {/* <Sidebar />   */}
            <div className="content w-100">
              {/* <NavbarHome /> */}
              {/* <Route path="/" exact component={PortadaView} />
              <Route path="/detalle/:id" exact component={ProductoView} /> */}
              <Route path="/j" exact component={InicioView}/>
              <Route path="/" exact component={ListaProductosView}/>
              <Route path="/new" exact component={CrearProductoView}/>
              <Route path="/update/:id" exact component={EditarProductoView}/>
            </div>
          </div> 
>>>>>>> Admin
        </Router>

        {/* <Router>
          <div className="container p-3">
            <NavTop/>
              <Switch>
                <Routes/>
              </Switch>
          </div> 
        </Router>  */}
  </div>
  )
}

