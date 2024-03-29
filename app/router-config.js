import { AccountController } from "./controllers/AccountController.js";
import { IToDoController } from "./controllers/IToDoController.js";
import { InspirationBasicController } from "./controllers/InspirationBasicController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [InspirationBasicController, IToDoController],
    view: `app/views/Inspiration.html`
  },

  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




