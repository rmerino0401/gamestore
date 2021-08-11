import ListaProductosView from "./view/ListaProductosView"
import InicioView from "./view/InicioView"

export default function App() {
  return (
    <div>
      <header>Esta es la cabezera </header>
      <nav>Este es el NAV</nav>
      <section> 
        <h1>Hola Mundo (RamaV)</h1>
        
        <InicioView/>
        <ListaProductosView/>
      </section>
      <footer>Esto es el footer</footer>
    </div>
  )
}

