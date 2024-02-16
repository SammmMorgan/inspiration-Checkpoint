import { AppState } from "../AppState.js"
import { iBasicService } from "../services/IBasicService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js"

function _drawUnsandboxImage() {

    // console.log('is anything evne working');
    const unsandboxImage = AppState.backgroundImage
    document.body.style.backgroundImage = `url(${unsandboxImage.imgUrl})`

    // setHTML('imageInfo', unsandboxImage.InfoCardHTMLTemplate)
}

function _drawQuote() {

    // console.log('is anything evne working');
    const quote = AppState.displayQuote
    setHTML('quoteElement', quote.QuoteHTML)

    // setHTML('imageInfo', unsandboxImage.InfoCardHTMLTemplate)
}


export class InspirationBasicController {


    constructor() {
        this.acquireTime()
        AppState.on('backgroundImage', _drawUnsandboxImage)
        AppState.on('displayQuote', _drawQuote)
        AppState.on('account', this.getRandomImage)
        AppState.on('account', this.getRandomQuote)

    }

    async getRandomImage() {
        try {
            await iBasicService.getMyImages()
        } catch (error) {
            Pop.error(error)
        }
    }

    async getRandomQuote() {
        try {
            await iBasicService.getNewQuote()

        } catch (error) {
            Pop.error(error)

        }
    }

    acquireTime() {
        iBasicService.setUpTime()
    }
}