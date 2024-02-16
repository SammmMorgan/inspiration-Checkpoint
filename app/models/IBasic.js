export class Ibasic {

    constructor(data) {
        this.id = data.id || data._id
        this.date = data.date == undefined ? new Date(data.created_at) : new Date(data.date)
        this.description = data.description || data.alt_description || ''
        this.imgUrl = data.imgUrl || data.urls || ''
        this.author = data.author
        this.nameOfPlace = data.name
        this.weatherReadout = data.weather
        this.quote = data.content
    }

    get QuoteHTML() {
        return `
        <section class="row">
        <div class="col-12">
            <div class="card fade-card">
                <div class="card-body">
                    <h4 class="card-title"> ${this.quote}</h4>
                </div>
            </div>

        </div>
    </section>
        `
    }

}