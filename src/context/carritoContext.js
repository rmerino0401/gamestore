import { useState, createContext} from 'react';


export const carritoContext = createContext()

const CarritoContextProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    const anadirACarrito = (producto) => {
        for(let i = 0; i < carrito.length; i++){
            if(carrito[i].prod_id === producto.prod_id){
//con esto tenemos el producto dentro del carrito y nos aseguramos de que no se repita, y solo se sumen las cantidades
            const productoExiste = {
                ...carrito[i],
                cantidad: carrito[i].cantidad + 1
            }
            let carritoTmp = [...carrito] // esta es una copia de carrito para poder editarla
            carritoTmp.splice(i, 1) //con esto removemos el producto
            carritoTmp.push(productoExiste) //aquí lo volvemos a agregar actualizando su cantidad
            setCarrito(carritoTmp) //aqui se actualiza con la copia de carritoTmp actualizada
            return
            //con return esto cortamos la ejecución, sino continuará a setCarrito que está mas abajo agregando un nuevo articulo.
            }

         }
                
        setCarrito([...carrito, {...producto, cantidad:1}])
    }

    return(
        <carritoContext.Provider value={{carrito, anadirACarrito}}>
            {props.children}
        </carritoContext.Provider>
    )
}

export default CarritoContextProvider