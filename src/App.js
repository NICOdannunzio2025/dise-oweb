import React, { useState } from 'react';
import './App.css';
import Titulo from './componentes/titulo';
import TarjetaDePerfil from './componentes/tarjetadeperfil';
import ListaDeHabilidades from './componentes/listadehabilidades';
function App() {
const [estado,setEstado]=useState(false)
  
let usuario={
     nombre: "nico dannunzio", 
     profesion: "analista", 
     edad:"29" 
  }

let lista=['React', 'JavaScript', 'HTML',"css"]

  let mostrar=()=>{
    if (estado=== true) {
      setEstado(false)
    }else{
      setEstado(true)
    }
  }
  return (
    <div className="App">
    
    <Titulo></Titulo>
    <TarjetaDePerfil dato={usuario}></TarjetaDePerfil>
    <button onClick={mostrar}>Mostrar</button>
    {estado&& <ListaDeHabilidades lista={lista}></ListaDeHabilidades>}
    
    </div>
  );
}

export default App;