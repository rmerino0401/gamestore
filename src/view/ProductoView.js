import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../services/productosService'
import Loading from '../components/Loading'

export default function ProductoView() {
    const [producto, setProducto] = useState({})
    // const [cargando, setCargando] = useState(true)

    const { id } = useParams()
// aqui desestructuramos useparams y obtenemos el prod unitario por id

    const getProducto = async () => {
        try {
            let productoObtenido = await obtenerProductoPorId(id)
            setProducto(productoObtenido)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducto()
    }, [])

    return (
        <div>
            {/* {Cargando ? "" (<Loading />) : null} */}
        </div>
    )
}