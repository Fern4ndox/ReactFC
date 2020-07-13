import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {
    //Crear Listado Productos
    const [ productos, guardarProductos] = useState([
        {id: 1, nombre: "Camisa ReactJS", precio: 50},
        {id: 2, nombre: "Camisa VueJS", precio: 30},
        {id: 3, nombre: "Camisa AngulartJS", precio: 20},
        {id: 4, nombre: "Camisa HooksJS", precio: 50}
    ]);

    //State Carrito de Compras

    const [carrito, agregarProducto] = useState([])
    //Impresión Fecha Footer
    const fecha = new Date().getFullYear();
    return ( <Fragment>
        <Header
        titulo='Tienda Virtual'
        numero={20}
        />
        <h1>Lista de Productos</h1>
        {productos.map(producto =>(
            <Producto
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
            />
        ))}
        <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto} />
        <Footer
        fecha = {fecha}
        />
        
        </Fragment>
    );
}
export default App;