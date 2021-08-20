import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Route, Redirect } from "react-router-dom";


export default function ProtectedRoute({component: Component, ...rest}) {

    const {userState} = useContext(AuthContext)

    return (
        <Route
            {...rest} 
            render={(props) => 
                userState ? (
                    // cuando el usuario esta logeado muestra esto 
                    <Component {...rest}{...props} />
                ): (
                    // si no le manda el login 
                    <Redirect to="/login" />
                )
            }
        />
    )
}


