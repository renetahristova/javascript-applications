import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

import { homePage } from "./views/homeView.js";
import { loginPage } from "./views/loginView.js";
import { moviePage } from "./views/movieView.js";

page("/", homePage);
page("/movies", moviePage);
page("/login", loginPage);
page.start();
