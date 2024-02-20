import { AppState } from "../AppState.js"
import { IToDo } from "../models/IToDo.js"
import { api } from "./AxiosService.js"

class IToDoService {

    async drawToDos() {
        const response = await api.get('api/todos')
        const toDoList = response.data.map(pojo => new IToDo(pojo))
        AppState.toDos = toDoList
        console.log(toDoList);

    }


}



export const iToDoService = new IToDoService()