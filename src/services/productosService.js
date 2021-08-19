// Desde aqui proveeremos la data de las tablas o database
import axios from "axios";
import { storage } from "../config/Firebase";

const URL_PROD = `${process.env.REACT_APP_API}productos`

// realizamos un get a la tabla productos
const obtenerProductos = async () => {
    try {
        let {data} = await axios.get(URL_PROD)
        return data
    } catch (error) {
        throw error
    }
}

// Funcion para crear los productos 
const crearProductos = async (nuevoProducto)=>{
    try {
        const headers= {
            "Content-Type": "application/json"
        }
        let {data} = await axios.post(URL_PROD, nuevoProducto, {headers})
        return data
    } catch (error) {
        throw error
    }
}

// Actualizar productos 
const obtenerProductosPorID = async (id) => {
    try {
        let {data} = await axios.get(`${URL_PROD}/${id}`)
        return data 
    } catch (error) {
        throw error
    }
}


const editarProducto = async (productoEditado, id )=> {
    try {
        const headers = {
            "Content-Type": "application/json"
        }
        const { data } = await axios.put(`${URL_PROD}/${id}`, productoEditado,{headers})
    } catch (error) {
        throw error
    }
}

const subirArchivo =(imagen) =>{
    return new Promise((resolve, reject)=>{
        let refStorage = storage.ref(`gamestore/${imagen.name}`)
        let tareaSubir = refStorage.put(imagen)
        tareaSubir.on("state_changed",
            ()=>{},
            (error)=>{reject(error)},
            // funcion para obtener la URL de la imagen
            ()=>{
             tareaSubir.snapshot.ref.getDownloadURL()
             .then((urlImagen)=>{
                resolve(urlImagen)
             })
            }
        )
    })
}

// Exportamos todas las tablas para ser utilizadas por los View o Components 
export {
    obtenerProductos,
    crearProductos,
    obtenerProductosPorID,
    editarProducto,
    subirArchivo
    // obtenerProductoPorId
}