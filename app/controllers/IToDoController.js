import { AppState } from "../AppState.js"
import { IToDo } from "../models/IToDo.js"
import { iToDoService } from "../services/IToDoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawToDoList() {
    const toDos = AppState.toDos
    // console.log('is anything evne working');
    let htmlString = ''
    toDos.forEach(strings => htmlString += strings.TODOHTML)
    setHTML('toDoList', htmlString)

}


export class IToDoController {



    constructor() {
        AppState.on('toDos', _drawToDoList)
        AppState.on('account', this.getToDos)
    }


    async getToDos() {
        try {
            await iToDoService.drawToDos()
        } catch (error) {
            Pop.error(error)
        }
    }

    async makeNewToDo() {
        try {
            event.preventDefault()
            console.log('this work at all');
            const form = event.target
            const formData = getFormData(form)

            await iToDoService.makeToDo(formData)

        } catch (error) {
            Pop.error(error)
        }
    }

    async editToDo(toDoId) {
        try {
            await iToDoService.editToDo(toDoId)
        } catch (error) {
            Pop.error(error)
        }
    }

    async murderToDo() {
        try {

        } catch (error) {

        }
    }

}