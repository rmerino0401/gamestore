import {useState, useEffect, useContext} from 'react'
import { carritoContext } from "../context/carritoContext"
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../services/productosService'
import Loading from '../components/Loading'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router'

export default function ProductoView() {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()
// aqui desestructuramos useparams y obtenemos el prod unitario por id

    const history = useHistory()

//con usecontext accedemos a la info compartida en el context
const {anadirACarrito} = useContext(carritoContext)



    const getProducto = async () => {
        try {
            let productoObtenido = await obtenerProductoPorId(id)
            setProducto(productoObtenido)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }

    const anadirACarritoContext = async () => {
        anadirACarrito(producto)
        const resultado = await Swal.fire({
            icon:'success',
            title: 'producto añadido!',
            showConfirmButton:true,
            confirmButtonText:'Quiero compras más',
            denyButtonText:'Ir a carrito'
        })
        if(resultado.isConfirmed){
            history.push('/')
        }else if(resultado.isDenied){
            history.push('/Carrito')
        }
    }

    useEffect(() => {
        getProducto()
    }, [])
    
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

                                <button className="btn btn-indigo btn-lg">
                                    onClick={anadirACarritoContext}
            
                                    <i className="fas fa shopping-cart me-2"/>
                                    Añadir a Carrito
                                </button>

                             </div>
                     </div>
                  </div>
             </div>
            </div>)}
            </div>    
    )
           }
        //    la funcion 'anadirACarritoContext' se va a ejecutar cuando le demos clic al botón de añadir a carrito
        // 