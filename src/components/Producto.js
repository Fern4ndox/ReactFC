import React, { Profiler } from 'react';

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


    //Eliminar Producto
    const eliminarProducto = id =>{
        const productos = carrito.filter(producto => producto.id !== id);
        //Colocar productos en el State
        agregarProducto(productos)
    }
    return (
        <div>
            <ul>       
        <li>{nombre} - Q.{precio}</li>
        
        {productos
        ?
            (<button type="button" 
            onClick={()=> seleccionarProducto(id)}>
            Comprar
            </button>)
        :
            (<button type="button" onClick={()=> eliminarProducto(id)}>
                Eliminar
                </button>)
        }
        </ul>
    </div>);
    
}
 
export default Producto