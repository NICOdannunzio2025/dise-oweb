import React from 'react'

export default function TarjetaDePerfil({dato}) {
  return (
    <div> 
        <h1> Tarjeta de perfil</h1>
        <h2>{dato.nombre}</h2>
        <h2>{dato.profesion}</h2>
        <h2>{dato.edad}</h2>

    </div>
  )
}