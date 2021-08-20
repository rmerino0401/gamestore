import {useContext} from 'react'
import { carritoContext } from '../context/carritoContext'

export default function CarritoView() {

    const { carrito } =useContext(carritoContext)

    return (
        <div className="container">
            <div className="my-4 text-center">
                <h1 className="fw-bold">
                    <i className="fas fa-shopping-cart me-3"/>
                    Estás a un paso de completar tu compra
                </h1>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((prod, i) => (
                        <tr key={i}>
                        <td>{prod.prod_nom}</td>
                        <td>{prod.cantidad}</td>
                        <td>{prod.prod_pre1}</td>
                        <td>S/ {prod.cantidad * prod.prod_pre1}</td>
                        </tr>

                        ))}
                </tbody>

            </table>

        </div>
    )
}
