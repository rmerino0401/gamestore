import { BrowserRouter as Router, Switch } from "react-router-dom"
import {Route} from "react-router-dom"
import Routes from "./Routes"
import NavTop from "./components/NavTop"

export default function App() {
  return (
    <div>
    {/* <Router>
          <div className="flex">
            <Sidebar />  
            <div className="content w-100">
              <NavbarHome />
              <Route path="/" exact component={PortadaView} />
              <Route path="/detalle/:id" exact component={ProductoView} />
              <Route path="/Inicio" exact component={InicioView}/>
              <Route path="/List" exact component={ListaProductosView}/>
              <Route path="/new" exact component={CrearProductoView}/>
              <Route path="/update/:id" exact component={EditarProductoView}/>
            </div>
          </div> 
        </Router>*/}


        <Router>
          <div className="container p-3">
            <NavTop/>
              <Switch>
                <Routes/>
              </Switch>
          </div> 
        </Router> 
  </div>
  )
}

