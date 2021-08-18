import { useState, useEffect} from "react"
import { Badge } from "react-bootstrap"
import { ButtonGroup, ButtonToolbar,Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
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
        <div className="container p-3">
            
            <div>
                <div><Link to="/new" className="btn btn-primary btn-lg my-2">Crear Producto</Link> </div>
                <div className="flex"><label className="form-label">Display <select className="form-select form-select-sm ms-1 me-1"></select>Productos</label></div>
            </div>

            <table className="table table-success table-striped table-hover">                
                <thead>
                    <tr className= "table-dark">
                        <th className="aling-top">#</th>
                        <th>PRODUCTO</th>
                        <th>DESCRIPCIÓN</th>
                        <th>CATEGORIA</th>
                        <th>MARCA</th>
                        <th>CANTIDAD</th>
                        <th><h4><Badge bg="success">Precio 1</Badge></h4></th>
                        <th><h4><Badge bg="success">Precio 2</Badge></h4></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, i)=>(
                        <tr key={i}>
                            <td className="aling-top">{producto.prod_id}</td>
                            <td>{producto.prod_nom}</td>
                            <td>{producto.prod_desc}</td>
                            <td>{producto.prod_cat}</td>
                            <td>{producto.prod_cla}</td>
                            <td>{producto.prod_stock}</td>
                            <td width='10%'><h5><Badge bg="success">{`S/. ${producto.prod_pre1}`}</Badge></h5></td>
                            <td width='10%'><h5><Badge bg="success">{`S/. ${producto.prod_pre2}`}</Badge></h5></td>
                            <td>
                                <Link className="btn btn-warning btn-sm"
                                 to={`/update/${producto.prod_id}`}
                                 >
                                    <i className="fas fa-edit"></i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button>1</Button> 
                    <Button>2</Button> 
                    <Button>3</Button> 
                    <Button>4</Button>
                </ButtonGroup>

            </ButtonToolbar>
            

        </div>
    )
}
