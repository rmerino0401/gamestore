import {useState, useEffect, useContext} from 'react'
import { CarritoContext } from '../context/carritoContext'

import { obtenerProductosPorID } from '../services/productosService'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import Swal from "sweetalert2"
import { useHistory } from 'react-router'

export default function ProductoView() {
    const [producto, setProducto] = useState([])
    //Aqui podremos ver si estamos cargando data o no (renderizado condicional)
    const [cargando, setCargando] = useState(true)
    //Optenemos el ID del Producto
    const {id} = useParams()

    const history = useHistory()
    
    const {anadirACarrito} = useContext(CarritoContext)

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

    const anadirACarritoContext = async () => {
        anadirACarrito(producto)
        const resultado = await Swal.fire({
            icon:'success',
            title:"Producto añadido!",
            showConfirmButton:true,
            showDenyButton:true,
            confirmButtonText:'Seguir comprando',
            denyButtonText:'Ir a carrito'
        })
        if(resultado.isConfirmed){
            history.push('/')
        }else if(resultado.isDenied){
            history.push('/carrito')
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

                                <button className="btn btn-dark btn-lg" onClick={anadirACarritoContext}>
                                    <i className="fas fa-shopping-cart me-2"></i>Añadir a Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}   
        </div>
    )
           }