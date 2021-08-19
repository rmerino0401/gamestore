import { useState, useEffect } from "react"
import { obtenerProductos} from "../services/productosService"
import Loading from "../components/Loading"
import GroupProducts from "../components/GroupProducts"

export default function ProductosView() {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    
    const getProductos = async () => {
        try {
            let obtenerProducto =  await obtenerProductos()
            setProducto(obtenerProducto)
            setCargando(false)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(
        ()=>{
           getProductos() 
        }, []
    )

    return (
        <div>
            <p>Estas dentro de ProductosView</p>
            {cargando ? (<Loading />):(
                <div className="py-4">
                    <div className="container text-center">
                        <h1 className="my-4">
                            <i className="fas fa-gifts me-3">
                                 Nuestro productos
                            </i>
                        </h1>
                    </div>
                    <GroupProducts productos={producto}/>
                </div>
            )} 
        </div>
    )
}
