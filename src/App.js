import { BrowserRouter as Router, Switch } from "react-router-dom"
import Routes from "./Routes"
import NavTop from "./components/NavTop"

export default function App() {
  return (
    <div>
      <header>Esta es la cabezera </header>
      
      
      <section> 
        {/* <h1>Hola Mundo (RamaV)</h1> */}
        
        <Router>
          <div className="container p-3">
            <NavTop/>
            <Switch>
              <Routes/>
            </Switch>
          </div>
        </Router>
        
        
      </section>
      <footer>Esto es el footer</footer>
    </div>
  )
}

