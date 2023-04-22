import {data} from '../utils/data'

 export const initialState =data.tasks;
 
    export const Reducer  =(state,{type,payload})=>{
        console.log({payload})
        switch (type){
            case "MOVE_TASK": return [...state, payload] 
            case "DELETE_TASK":
                return  payload 
            case "SUBMIT_TASK" : return [...state, payload]
            default:
                return state;
        }

   
    }


