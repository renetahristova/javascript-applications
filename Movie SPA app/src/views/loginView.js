import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authServices from "../services/authService.js";

let loginTemplate = (onSubimt) =>
  html` <section class="login-section">
    <h2>Login</h2>
    <div class="login-form">
      <form @submit=${onSubimt}>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              name="email"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >Password</label
          >
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              name="password"
            />
          </div>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">Register</button>
        </div>
      </form>
    </div>
  </section>`;
export function loginPage(ctx) {
  const onLoginSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email").trim();
    let password = formData.get("password").trim();

    authServices.login(email, password).then(() => ctx.page.redirect("/"));
    //email & password input check
  };
  ctx.render(loginTemplate(onLoginSubmit));
}
