import { html } from "../../node_modules/lit-html/lit-html.js";

let loginTemplate = () =>
  html` <section class="login-section">
    <h2>Login</h2>
    <div class="login-form">
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
    </div>
  </section>`;
export function loginPage(ctx) {
  ctx.render(loginTemplate());
}
