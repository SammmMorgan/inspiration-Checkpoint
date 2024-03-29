import { Ibasic } from './models/IBasic.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  // /**@type {Ibasic{}} */
  backgroundImage = {}

  myImage = []


  displayQuote = {}

  weatherDisplay = {}

  toDos = []


  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
}

export const AppState = createObservableProxy(new ObservableAppState())