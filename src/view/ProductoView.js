import {useState, useEffect} from 'react'
import { obtenerProductosPorID } from '../services/productosService'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

export default function ProductoView() {
    const [producto, setProducto] = useState([])
    //Aqui podremos ver si estamos cargando data o no (renderizado condicional)
    const [cargando, setCargando] = useState(true)
    //Optenemos el ID del Producto
    const {id} = useParams()
    //Extraemos los productos 
    const getProducto = async ()=>{
        try {
            const productoObtenido = await obtenerProductosPorID(id)
            setProducto(productoObtenido)
            //Detenemos el Spinner
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }
     // Ejecutar el estado del producto 
     useEffect(()=>{
        getProducto()
    },[])
    
    return (
        <div>
            {cargando?(<Loading />) : 
            (
                <div className="container">
                    <h2 className="fw-bold">{producto.prod_nom}</h2>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img 
                                className="img-fluid"
                                src={producto.prod_img}
                                alt={producto.prod_nom}
                            />
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <h5 className="fw-bold">Descripción</h5>
                            <p>{producto.prod_desc}</p>
                            <div className="py-3 d-flex justify-content-between">
                                <span className="fw-bold">
                                    S/ {producto.prod_pre1}
                                </span> 
                            </div>
                        </div>
                    </div>
                </div>
            )}   
        </div>
    )
           }