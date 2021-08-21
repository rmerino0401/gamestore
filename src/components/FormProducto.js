import {useRef} from "react"
let img

export default function FormProducto({value, actualizarInput, manejarSubmit, manejarImagen}) {
   const inputFile = useRef()
    return (
        <div>
            <form onSubmit={(e)=>{manejarSubmit(e)}}>
                <div className="mb-3"><label className="form-label">Nombre: <input type="text" className="form-control" name="prod_nom" value={value.prod_nom} onChange={(e) => {actualizarInput(e)}} /></label></div>    
                <div className="mb-3"><label className="form-label">Descripción: 
                <textarea name="prod_desc" className="form-control" rows="5" cols="60" value={value.prod_desc} onChange={(e) => {actualizarInput(e)}}></textarea>
                {/* <input type="text" className="form-control" name="prod_desc" value={value.prod_desc} onChange={(e) => {actualizarInput(e)}} /> */}
                </label></div>       
                <div className="mb-3"><label className="form-label">Categoria:<input type="text" className="form-control" name="prod_cat" value={value.prod_cat} onChange={(e) => {actualizarInput(e)}} /></label></div>       
                <div className="mb-3"><label className="form-label">Clase:<input type="text" className="form-control" name="prod_cla" value={value.prod_cla} onChange={(e) => {actualizarInput(e)}} /></label></div>       
                <div className="mb-3"><label className="form-label">Stock:<input type="number" className="form-control" name="prod_stock" value={value.prod_stock} onChange={(e) => {actualizarInput(e)}} /></label></div>       
                <div className="mb-3"><label className="form-label">Precio 1: <input type="number" className="form-control" name="prod_pre1" value={value.prod_pre1} onChange={(e) => {actualizarInput(e)}} /></label></div>  
                <div className="mb-3"><label className="form-label">Precio 2: <input type="number" className="form-control" name="prod_pre2" value={value.prod_pre2} onChange={(e) => {actualizarInput(e)}} /></label></div>   
                <div className="mb-3"><label className="form-label">Precio 3: <input type="number" className="form-control" name="prod_pre3" value={value.prod_pre3} onChange={(e) => {actualizarInput(e)}} /></label></div>   
                <div className="mb-3"><label className="form-label">Precio 4: <input type="number" className="form-control" name="prod_pre4" value={value.prod_pre4} onChange={(e) => {actualizarInput(e)}} /></label></div>   
                <div className="mb-3"><label className="form-label">Precio 5: <input type="number" className="form-control" name="prod_pre5" value={value.prod_pre5} onChange={(e) => {actualizarInput(e)}} /></label></div>            
                <div className="mb-3"><label className="form-label">Imagen 
                <input type="file" className="form-control" ref={inputFile}
                onChange={(e)=>{manejarImagen(e)}}/></label></div>
               <div className="mb-3"><button className="btn btn-primary btn-lg" type="submit">Guardar</button></div>
            </form>
        </div>
    )
}
