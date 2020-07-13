import React from 'react';

function Header({titulo})
{
    console.log(titulo);
    return( 
    <h1 className="encabezado" id="encabezado">{titulo}</h1>
    )
}

export default Header;