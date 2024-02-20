export class IToDo {

    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.complete = data.completed
    }

    get TODOHTML() {
        return `
        <section class="row px-3 py-1 align-items-center">
        <div class="col-12 p-3 fade-card align-items-center">
            <p class="">
            <div class="form-check">
            ${this.CompletedCheckbox}
                          </div>
            ${this.description}
            <span onclick="app.IToDoController.murderToDo('${this.id}')" class="text-danger mdi mdi-trash-can" role="button">
            </span>
            </p>
        </div>
    </section>
        `
    }

    get CompletedCheckbox() {
        // NOTE onchange will execute code every time an inputs value is changed. Very handy for checkboxes
        // NOTE ternary conditionally adds the 'checked' attribute to our input if the spell.prepared == true
        return `
        <input onchange="app.IToDoController.editToDo('${this.id}')" ${this.complete ? 'checked' : ''} type="checkbox">
        `
    }
}
