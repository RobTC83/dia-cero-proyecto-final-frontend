import {
    OBTENER_TOKEN,
    BORRAR_TOKEN
} from './../../types/index.js'

export default (state,action)=>{

    switch(action.type) {
        case OBTENER_TOKEN:
            return {
                token : state.token
            }
            default:
                return state
    }

}