import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authServices from "../services/authService.js";

let addMovieTemplate = (onSubmit) => html`
  <h2>Add Movie</h2>
  <form @submit=${onSubmit}>
    <div class="mb-3">
      <label for="movie-title" class="form-label">Movie title</label>
      <input type="text" class="form-control" id="movie-title" name="title" />
    </div>
    <div class="mb-3">
      <label for="movie-image-url" class="form-label">Movie Image Url</label>
      <input type="text" class="form-control" id="movie-image-url" name="url" />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea
        class="form-control"
        id="description"
        name="description"
        rows="3"
      ></textarea>
    </div>
    <div class="mb-3">
      <input type="submit" value="Create" />
    </div>
  </form>
`;

export function addMoviePage(ctx) {
  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    console.log(formData.get("title"));
    //ctx.page.redirect("/movies");
  };
  ctx.render(addMovieTemplate());
}
