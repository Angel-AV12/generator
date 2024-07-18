import TareaFormulario from "./TareaFormulario";
import { useState } from "react";
import Tareas from "./tareas";
import "../estilos/Lista.css";
function Lista(){
    const [tareas,setTareas] = useState([]);
    const addtarea = tarea =>{
        console.log(tarea)
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }

    }

    const eliminar = id =>{
        const tareasActualizadas = tareas.filter(tarea=>tarea.id!==id);
        setTareas(tareasActualizadas);
    }
    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tarea=>{
            if(tarea.id===id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTareas(tareasActualizadas);

    }

    return(
        <>
        <TareaFormulario onSubmit={addtarea}/>
        <div className="tareas-lista-contenedor">
        {
            tareas.map((tarea)=>
            <Tareas 
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarw={completarTarea}
            eliminarw={eliminar}/>
            )
        }
        </div>
        </>
    )
}

export default Lista;