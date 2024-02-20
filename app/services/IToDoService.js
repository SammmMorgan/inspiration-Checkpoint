import { AppState } from "../AppState.js"
import { IToDo } from "../models/IToDo.js"
import { api } from "./AxiosService.js"

class IToDoService {
    async murderToDo(toDoId) {
        const givenToDo = AppState.toDos.findIndex(task => task.id == toDoId)
        if (givenToDo == -1) {
            throw new Error('find index failed')
        }
        const response = await api.delete(`api/todos/${toDoId}`)
        console.log(givenToDo);
        AppState.toDos.splice(givenToDo, 1)

    }
    async editToDo(toDoId) {
        const givenToDo = AppState.toDos.findIndex(task => task.id == toDoId)
        if (givenToDo == -1) {
            throw new Error('find index failed')
        }
        console.log(givenToDo);
        const foundTask = AppState.toDos[givenToDo]
        const theUpdate = { completed: true }

        const response = await api.put(`api/todos/${toDoId}`, theUpdate)

        const updateTask = new IToDo(response.data)

        AppState.toDos.splice(givenToDo, 1, updateTask)
        console.log(AppState.toDos);

    }
    async makeToDo(formData) {

        const response = await api.post('api/todos', formData)
        const newToDo = new IToDo(response.data)
        AppState.toDos.push(newToDo)
    }

    async drawToDos() {
        const response = await api.get('api/todos')
        const toDoList = response.data.map(pojo => new IToDo(pojo))
        AppState.toDos = toDoList
        console.log(toDoList);

    }


}



export const iToDoService = new IToDoService()