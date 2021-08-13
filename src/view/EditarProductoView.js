import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import Swal from "sweetalert2"

import { editarProducto, obtenerProductosPorID } from "../services/productosService"
import FormProducto from "../components/FormProducto"



export default function EditarProductoView() {
    
    const [value, setValue]= useState({
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
    
    
    // aqui obtenemos el ID del producto por la URL
    const {id} = useParams()
    const history = useHistory()
    // aqui obtenemos los productos que se encuentran guardados y se mostraran en los input
    const getProducto = async ()=>{
        try {
            const productoObtenido = await obtenerProductosPorID(id)
            setValue({...productoObtenido})
        } catch (error) {
            console.log(error)
        }
    }

    // Ejecutar el estado 
    useEffect(()=>{
        getProducto()
    },[])


    const actualizarInput = (e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) => {
        e.preventDefault()
        await editarProducto(value, id)
        await Swal.fire({
            icon:"success",
            title:"Producto editado con éxito",
            showConfirmButton:false,
            timer:700
        })
        history.push('/')
    }


    return (
        <div>
            <h1>Editar Producto</h1>
            <FormProducto value= {value} actualizarInput={actualizarInput} manejarSubmit={manejarSubmit} />
        </div>
    )
}
