import page from "../node_modules/page/page.mjs";
import { renderMiddleware } from "./middlewares/renderMiddleware.js";

import { homePage } from "./views/homeView.js";
import { loginPage } from "./views/loginView.js";
import { moviePage } from "./views/movieView.js";
page(renderMiddleware);
page("/", homePage);
page("/movies", moviePage);
page("/login", loginPage);
page.start();
