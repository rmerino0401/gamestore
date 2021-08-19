import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../services/productosService'
import Loading from '../components/Loading'

export default function ProductoView() {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()
// aqui desestructuramos useparams y obtenemos el prod unitario por id

    const getProducto = async () => {
        try {
            let productoObtenido = await obtenerProductoPorId(id)
            setProducto(productoObtenido)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProducto()
    },[])
    
    return (
        <div>
            {cargando ? 
            (<Loading/>) : 
           (<div>
             <div className="container">
                 <h2 className="fw-bold">{producto.prod_nom}</h2>
                 <div className="Row">
                     <div className="col-sm-12 col-md-6">
                         <img
                             className="img-fluid"
                             src={producto.prod_img}
                             alt={producto.prod_nom}
                             />
                         </div>
                         <div className="col-sm-12 col-md-6">
                             <h5 className= "fw-bold">Características</h5>
                             <p>{producto.prod_desc}</p>
                             <div className="py-3 d-flex justify-content-between">
                                 <span
                                 className="fw-bold">
                                     S/ {producto.prod_pre1}
                                 </span>
                             </div>
                     </div>
                  </div>
             </div>
            </div>)}
            </div>    
    )
           }