import { html } from "../../node_modules/lit-html/lit-html.js";
import * as movieService from "../services/movieService.js";

const cardTemplate = ({ img, title, _id }) => html`
  <div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="${title}" />
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <a href="/movies/${_id}" class="btn btn-primary">Details</a>
    </div>
  </div>
`;

const moviesTemplate = (movies) => html`
  <h2>Movies Page</h2>
  <ul class="movie-list">
    ${movies.map((x) => cardTemplate(x))}
  </ul>
`;
export function moviePage(ctx) {
  movieService.getAll().then((movies) => {
    ctx.render(moviesTemplate(movies));
  });
}
