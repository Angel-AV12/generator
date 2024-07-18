import { useState } from 'react'
import './App.css'
import Logo from "./imagenes/freecodecamp-logo.png";
import Tarea from "./componentes/tareas";
import TareaFormulario from "./componentes/TareaFormulario";
import Lista from "./componentes/Lista";
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
    <div className="freecodecamp-logo-contenedor">
      <img src={Logo} className='freecodecamp-logo' />
    </div>
    <div className='tareas-lista-principal'>
    <h1>Mis tareas</h1>
    <Lista></Lista>
    </div>

   </div>

  )
}

export default App
