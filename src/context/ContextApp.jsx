import { createContext, useEffect, useState } from "react";
import { getVerificacion } from "../helpers/apiUsuario";

export const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [usuarioVeri, setUsuariVeri] = useState({})
    //PARA VERIFICAR USUARIOS
    useEffect(()=>{
        const token = localStorage.getItem("token")
        getVerificacion(token).then((res)=> console.log(res))
    }, [])


    return (
        <AppContext.Provider value={{usuarioVeri}}>
            {children}
        </AppContext.Provider>
    )
}