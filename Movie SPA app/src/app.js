import page from "../node_modules/page/page.mjs";

import { authMiddleware } from "./middlewares/authMiddleware.js";
import { renderMiddleware } from "./middlewares/renderMiddleware.js";

import { homePage } from "./views/homeView.js";
import { loginPage } from "./views/loginView.js";
import { movieDetailsPage } from "./views/movieDetailsView.js";
import { moviePage } from "./views/movieView.js";

page(authMiddleware);
page(renderMiddleware);

page("/", homePage);
page("/movies", moviePage);
page("/login", loginPage);
page("/movies/:movieId", movieDetailsPage);

page.start();
