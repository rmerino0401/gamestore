import { useState, useEffect } from "react"
import { crearProductos } from "../services/productosService"
import FormProducto from "../components/FormProducto"
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"


export default function CrearProductoView() {
    const [value,setValue] = useState({
        prod_nom: "",
        prod_desc: "",
        prod_cat: "",
        prod_cla: "",
        prod_stock: 0,
        prod_pre1: 0,
        prod_pre2: 0,
        prod_pre3: 0,
        prod_pre4: 0,
        prod_pre5: 0,
    })

    const history = useHistory()

    const actualizarInput = (e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }


    const manejarSubmit = async (e) => {
        e.preventDefault()
        try {
            await crearProductos(value)
            await Swal.fire({
                icon:'success',
                title:'Producto creado!!',
                showConfirmButton:false,
                timer:3000
            })
            history.push('/')

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
          <h1>Crear Producto</h1>
          <FormProducto value={value} 
          actualizarInput={actualizarInput} 
          manejarSubmit= {manejarSubmit}/>
        </div>
    )
}
