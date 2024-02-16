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
            <div class="card fade-card quote-card">
                <div class="card-body">
                    <h4 class="card-title"> ${this.quote}</h4>
                </div>
                <div class="hidden-details text-center">
                <h2>
                <span>By ${this.author}</span>
                <i class="mdi mdi-account-circle text-light"></i>
                </h2>
              </div>
            </div>
        </div>
    </section>
        `
    }

    // get InfoCardHTMLTemplate() {
    //     return `

    //       <div class="hidden-details">
    //         <h2>
    //         <span>By ${this.author.name}</span>
    //         <a title="Go see ${this.author.first_name}'s profile on unsplash" href="${this.author.links.html}" target="_blank">
    //         <i class="mdi mdi-account-circle text-light"></i>
    //         </a>
    //         </h2>
    //         <h3>${this.description}</h3>
    //       </div>
    //     </div>
    //     `
    // }

}