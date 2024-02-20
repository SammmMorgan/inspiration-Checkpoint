export class IToDo {

    constructor(data) {
        this.title = data.description.type
        this.complete = data.completed
    }

    get TODOHTML() {
        return `
        <section class="row align-items-center">
        <div class="col-12 p-3 fade-card align-items-center">
            <p class="">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                </label>
            </div>
            Get This FUcker Done
            <span class="text-danger mdi mdi-trash-can" role="button">
            </span>
            </p>
        </div>
    </section>
        `
    }
}
