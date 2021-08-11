import { useState, useEffect} from "react"
import { obtenerProductos } from "../services/productosService"

export default function ListaProductosView() {
    
    const [productos, setProductos] = useState([])

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            // console.log(productosObtenidos)
            setProductos(productosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProductos()
    },[])

    //en los return mostraremos todo el contenido de la vista HTML + Bootstrap
    return (
        <div>
            <button className="btn btn-primary btn-lg my-2">
                Crear Producto
            </button>

            <h2>Lista de Productos</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>descripcion</th>
                        <th>categia</th>
                        <th>Clase</th>
                        <th>Stock</th>
                        <th>Precio 1</th>
                        <th>Precio 2</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, i)=>(
                        <tr key={i}>
                            <td>{producto.prod_nom}</td>
                            <td>{producto.prod_desc}</td>
                            <td>{producto.prod_cat}</td>
                            <td>{producto.prod_cla}</td>
                            <td>{producto.prod_stock}</td>
                            <td>{producto.prod_pre1}</td>
                            <td>{producto.prod_pre2}</td>
                            <td>
                                <button className="btn btn-warning btn-sm">
                                    <i className="fas fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
