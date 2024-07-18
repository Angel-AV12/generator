import "../estilos/Tareas.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({id,texto,completada,completarw,eliminarw}){
    return(
        <div className={ completada ?'Tarea-contenedor completada':'Tarea-contenedor'}>
            <div 
            onClick={()=> completarw(id)}
            className="Tarea-texto">
            {texto}
            </div>

            <div className="Tarea-icono-contenedor">
            <AiOutlineCloseCircle className="Tarea-icono" onClick={()=>eliminarw(id)}/>
            </div>
        </div>
    )
}

export default Tarea;