// import {useState, useEffect} from 'react'
// import { obtenerProductos } from '../services/productosService'
// import GroupProducts from '../components/GroupProducts'

// export default function PortadaView() {
//     const [productos, setProductos] = useState([])

//     const getProductos = async () => {
//         try {
//             let productosObtenidos = await obtenerProductos()
//             setProductos(productosObtenidos)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//     getProductos()
//         }, [])

//     return (
//         <div>
//             {/* <h1>1.- Se ejecuta primero PortadaView</h1>
//             <h1>2 .- Se manda los productos a GroupProducts.js</h1> */}
//             <GroupProducts productos={productos} />
//         </div>
//     )
// }
