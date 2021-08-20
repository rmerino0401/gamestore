import { NavLink } from "react-router-dom"
import * as icons from "react-icons/fa"

const Sidebar = ()=>{
    return (
        <div className="sidebar bg-light">
            <ul>
                <li><NavLink to="/Inicio" exact activeClassName="active" className=" py-2 w-100 d-inline-block"><icons.FaHome className="me-2"/> Inicio</NavLink></li>
                <li><NavLink to="/new" exact activeClassName="active" className=" py-2 w-100 d-inline-block"><icons.FaCube className="me-2"/> Productos</NavLink></li>
                <li><NavLink to="/List" exact activeClassName="active" className=" py-2 w-100 d-inline-block"><icons.FaCubes className="me-2"/> Productos Detalles</NavLink></li>
                <li><NavLink to="/Pedidos" exact activeClassName="active" className=" py-2 w-100 d-inline-block"><icons.FaBox className="me-2"/> Pedidos</NavLink></li>
                <li><NavLink to="/PedidosDetalle" exact activeClassName="active" className=" py-2 w-100 d-inline-block"><icons.FaBoxes className="me-2"/> Pedidos Detalles</NavLink></li>
                <li><NavLink to="/Clientes" exact activeClassName="active" className=" py-2 w-100 d-inline-block"><icons.FaHome className="me-2"/> Clientes</NavLink></li>
                <li><NavLink to="/Vendedores" exact activeClassName="active" className=" py-2 w-100 d-inline-block"><icons.FaUserFriends className="me-2"/> Vendedores</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar