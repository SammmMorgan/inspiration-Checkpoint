import { AppState } from "../AppState.js"
import { IToDo } from "../models/IToDo.js"
import { iToDoService } from "../services/IToDoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"


function _drawToDoList() {
    const toDos = AppState.toDos
    // console.log('is anything evne working');
    let htmlString = ''
    toDos.forEach(strings => htmlString += strings.TODOHTML)
    setHTML('toDoList', htmlString)

}

function _drawCount() {
    let counter = AppState.toDos.length
    setText('counterHTML', [counter])
}


export class IToDoController {



    constructor() {
        AppState.on('toDos', _drawToDoList)
        AppState.on('account', this.getToDos)
        AppState.on('toDos', _drawCount)
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
            // @ts-ignore
            form.reset()

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

    async murderToDo(toDoId) {
        try {
            const wantsToRemove = await Pop.confirm('are you sure you want to delete that?')
            if (!wantsToRemove) {
                return
            }
            await iToDoService.murderToDo(toDoId)
        } catch (error) {
            Pop.error(error)
        }
    }

}