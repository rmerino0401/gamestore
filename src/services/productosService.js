// Desde aqui proveeremos la data de las tablas o database
import axios from "axios";

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




// Exportamos todas las tablas para ser utilizadas por los View o Components 
export {
    obtenerProductos
}