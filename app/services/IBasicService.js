import { AppState } from "../AppState.js";
import { Ibasic } from "../models/IBasic.js";
import { api } from "./AxiosService.js";

class IBasicService {

    async getNewQuote() {
        const response = await api.get('api/quotes')
        console.log('📡 Got a quote', response.data);
        const newQuote = new Ibasic(response.data)
        AppState.displayQuote = newQuote
        console.log(AppState.displayQuote);
    }

    async getMyImages() {
        console.log('this isnt even running is it');
        const response = await api.get('api/images')
        const newImages = new Ibasic(response.data)
        AppState.backgroundImage = newImages
        console.log(AppState.myImage);
    }






}


export const iBasicService = new IBasicService()