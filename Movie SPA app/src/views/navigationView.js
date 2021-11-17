import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";

let userInfo = (email) => html` <span>Welcome, ${email}</span> `;
let guestButtons = () => html`
                  <li class="nav-item">
                    <a class="nav-link" href="/register">Register</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                  </li>
                </ul>
`;
let privateButtons = () => html`
                  <li class="nav-item">
                    <a class="nav-link" href="/my-movies">My movies</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/logout">Logout</a>
                  </li>
                </ul>
`;
const navigationTemplate = (isAuthenticated, email) => html`
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/"><img src="./M.png" alt="m-logo" style="width: 50px; height: 50px;" ></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/movies">Movies</a>
                  </li>
                  ${isAuthenticated ? privateButtons() : guestButtons()}

                ${isAuthenticated && userInfo(email)}
              </div>
            </div>
          </nav>
          </li>
        </ul>
      </nav>
`;
export function renderNavigation(ctx) {
  console.log(ctx);
  return navigationTemplate(ctx.isAuthenticated, ctx.email);
}
