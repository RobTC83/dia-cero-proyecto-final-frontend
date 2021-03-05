import React, {useReducer, useEffect} from 'react'
import AuthReducer from './AuthReducer'
import AuthContext from './AuthContext'
import axios from 'axios'


import {
    OBTENER_TOKEN,
    BORRAR_TOKEN
} from './../../types'


export default function AuthState(props){

    const initialState = {
        token: false
    }

    const [state, dispatch] = useReducer (AuthReducer,initialState)

    useEffect(()=>{

        const getToken = async ()=>{

            const respuesta = await axios.post("")

        }


    })


    // funciones de dispatch
    const obtenerToken = ()=> {
        dispatch({
            type: OBTENER_TOKEN
        })

    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                obtenerToken
            }}
        >
            {props.children}

        </AuthContext.Provider>
    )

}