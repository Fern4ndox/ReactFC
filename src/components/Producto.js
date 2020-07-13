import React from 'react';

const Producto=({producto, carrito, agregarProducto, productos})=>{
    const {nombre, precio, id} = producto;
    const seleccionarProducto = id =>{
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto(
           [//Clonar Arreglo
            ...carrito,
            producto]);
        console.log(producto)
    } 
    return (
        <div>
            <ul>       
        <li>{nombre} - Q.{precio}</li>
        <button type="button" onClick={()=> seleccionarProducto(id)}>
            Comprar
        </button>
        </ul>
    </div>);
    
}
 
export default Producto