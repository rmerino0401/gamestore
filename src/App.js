import { BrowserRouter as Router, Switch } from "react-router-dom"
import Routes from "./Routes"

export default function App() {
  return (
    <div>
      <header>Esta es la cabezera </header>
      <nav>Este es el NAV</nav>
      <section> 
        {/* <h1>Hola Mundo (RamaV)</h1> */}
        
        <Router>
          <div className="container p-3">
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

