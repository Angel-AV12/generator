import "../estilos/TareaFormulario.css";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";
function TareaFormulario(props){

    const [input,setInput] = useState('');

    const handlerchange = e =>{
        setInput(e.target.value);
    }

    const handlersend = e =>{
        e.preventDefault();
        const tareaNueva = {
        id: uuidv4(),
        texto: input,
        completado: false
        }
        props.onSubmit(tareaNueva);
    }

return(
    <form className="tarea-formulario" onSubmit={handlersend}>
        <input type="text"className="tarea-input" placeholder="Escribe una tarea" name="texto" onChange={handlerchange} />
        <button className="tareas-boton">Agregar Tarea</button>
    </form>
)
}

export default TareaFormulario;