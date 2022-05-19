import { createContext, useState } from "react";



export const CodeContext = createContext( null );

export const CodeProvider = ( {children} ) => {

    const [codeState, setCodeState] = useState('');
    const [results, setResults] = useState([]);
    const [comments, setComments] = useState([]);

    const change = ( value ) => {
        setCodeState( value )
    }

    const loadResults = ( value ) =>{
        setResults( value )
    }

    const loadComments = ( value ) =>{
        setComments( value )
    }

    const clean = () => {
        setCodeState('')
    }

    const openFile = (e) => {
        const archivo = e.target.files[0];  // Guardamos la referencia al primer archivo seleccionado
        if(!archivo){ // Verificamos si se selecciono algun archivo
            return;
        }
        const lector = new FileReader();   // Crear un objeto que lea archivos
        lector.onload = (e) => {            // Cuando se esta cargando ejecuta lo siguiente
            const contenido = e.target.result; // Guardamos el contenido del archivo
            setCodeState( contenido ); // Generamos el nuevo estado
        }
        lector.readAsText(archivo); // Que lea el archivo como texto
        e.target.value = null; // Reiniciamos la ruta del archivo para que vuelva a escuchar el evento
    }

    return (
        <CodeContext.Provider value={{
            codeState,
            change,
            clean,
            openFile,
            loadComments,
            loadResults,
            results,
            comments
        }}>
            {children}
        </CodeContext.Provider>
    )
}