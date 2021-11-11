import { html } from "../../node_modules/lit-html/lit-html.js";

let homeTemplate = () => html`
  <section>
    <h1>M Movies</h1>
    <p>Place to store your favourite movies and explore for new ones.</p>
  </section>
`;
export function homePage(ctx) {
  ctx.render(homeTemplate());
}
