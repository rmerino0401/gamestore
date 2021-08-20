import { useState, useEffect } from "react"
import imgLogin from "../assets/imgLogin.jpg"
export default function LoginView() {
    return (
        <div className="row" style={{height:'calc(100vh - 60px)'}}>
            <div className="col-sm-12 col-md-6" style={{height:'100%',overflow:'hidden'}}>
                <img src={imgLogin} style={{ maxHeight:'100%', objectFit:'cover'}} alt="Imagen login"/>
            </div>

            <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h2>Ingresa!</h2>
                    <button className="btn btn-danger btn-lg">
                        <i classname="fab fa-google me-2"/>
                        Ingresa con google
                    </button>
                </div>
            </div>
            
        </div>
    )
}
