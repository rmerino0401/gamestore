import { useState, useEffect, useRef } from "react"
import { obtenerProductos} from "../services/productosService"
import Loading from "../components/Loading"
import GroupProducts from "../components/GroupProducts"
import Slider from '@material-ui/core/Slider';

export default function ProductosView() {
    const [producto, setProducto] = useState([])
    const [productoOriginal, setProductoOriginal] =useState([])
    const [cargando, setCargando] = useState(true)
    const [filtroPrecio, setFiltroPrecio] = useState([1,500])
    const inputBusqueda = useRef()

    const getProductos = async () => {
        try {
            let obtenerProducto =  await obtenerProductos()
            setProducto(obtenerProducto)
            setProductoOriginal(obtenerProducto)
            setCargando(false)
        } catch (error) {
            console.error(error);
        }
    }

    const manejarPrecio = (evento, nuevosPrecios)=>{
        setFiltroPrecio(nuevosPrecios)
    }

    const filtroNombre = async ()=> {
        let filtro = inputBusqueda.current.value
        const productosFiltrados = await obtenerProductos(filtro)
        console.log(productosFiltrados)
        setProducto(productosFiltrados)
    }

    useEffect(
        ()=>{
           getProductos() 
        }, []
    )

    useEffect(()=>{
        let productosFiltrados = productoOriginal.filter((prod)=>{
            return prod.prod_pre1 >=filtroPrecio[0] && prod.prod_pre1 <= filtroPrecio[1]
        })

        setProducto(productosFiltrados)
    },[filtroPrecio])

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
                        <div className="row my-2">
                            <div className="col-sm-12 col-md-6">
                                <h5>Filtros de Precio</h5>
                                <Slider 
                                value={filtroPrecio} 
                                onChange={manejarPrecio} 
                                valueLabelDisplay="auto"
                                mix={1}
                                max={3000}></Slider>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="d-flex gap-1">
                                    <h5>Filtrar por nombre</h5>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Ingrese el nombre o descripción"
                                    ref={inputBusqueda}/>
                                    <button className="btn btn-dark" onClick={filtroNombre}>
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <GroupProducts productos={producto}/>
                </div>
            )} 
        </div>
    )
}
