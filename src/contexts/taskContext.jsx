import { createContext ,useReducer} from "react";
import { initialState,Reducer} from "../reducer/taskReducer";
export const TaskContext =createContext();

const TaskContextWrapper = ({children})=>{
    const [state,dispatch] = useReducer(Reducer,initialState);
    const contextValue ={state,dispatch}
 return (
    <TaskContext.Provider value={contextValue} >{children}</TaskContext.Provider>
 )
}
export default TaskContextWrapper