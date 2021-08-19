import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function GroupProducts({ productos}) {
  
  return (
      <div className="container">
        <h1>Productos 2021</h1>
        <div className="row mt-3">
          {productos.map((prod, i) => (
            <div className="col-6 col-lg-3" key={i}>
              <Link className="card mb-4" to={`/detalle/${prod.prod_id}`}>
                <img src={prod.prod_img} className="card-img-top" alt={prod.prod_nom} />
                <div className="card-body">
                  <h6 className="card-title">{prod.prod_nom}</h6>
                  <span className="fw-bold"> S/ {prod.prod_pre1}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
  );
}