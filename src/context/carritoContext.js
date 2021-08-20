import { useState, createContext, useEffect } from "react";
export const CarritoContext = createContext()

const CarritoContextProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    const anadirACarrito = (producto) => {
        for(let i = 0; i < carrito.length; i++){
            if(carrito[i].prod_id === producto.prod_id){
                //Aqui tenemos el producto incorporado en el carrito de compras
                const productoExiste = {
                    ...carrito[i],
                    cantidad: carrito[i].cantidad + 1
                }
                let carritoTmp = [...carrito] 
                carritoTmp.splice(i, 1) 
                carritoTmp.push(productoExiste) 
                setCarrito(carritoTmp) 
                return 
            }
        }
        setCarrito([...carrito, {...producto, cantidad:1}])
    }

    useEffect(() => {
        const carritoStorage = JSON.parse(localStorage.getItem('carrito'))
        if(carritoStorage){
            setCarrito(carritoStorage)
        }
    },[])

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito])

    return (
        <CarritoContext.Provider value={{carrito, anadirACarrito}}>
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoContextProvider