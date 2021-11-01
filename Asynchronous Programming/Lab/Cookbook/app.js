let mainElement = document.getElementById("main-section");
let loadingElement = document.querySelector(`main > p`).remove();

//GET RECIPES FROM SERVER
let url = "http://localhost:3030/data/recipes";
fetch(url)
  .then((res) => res.json())
  .then((recipes) => {
    for (const key in recipes) {
      let currentRecipe = recipes[key];
      console.log(currentRecipe);
      //closed recipe elements
      // let id = currentRecipe._id;
      // let image = currentRecipe.img;
      let name = currentRecipe.name;

      //CREATE ELEMENTS

      let articleEl = document.createElement("article");
      articleEl.className = "preview";
      let divEl = document.createElement("div");
      divEl.className = "title";
      let headingEl = document.createElement("div");
      let titleEl = document.createElement("h2");
      titleEl.textContent = name;
      let imageDivEl = document.createElement("div");
      imageDivEl.className = "small";
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", `${currentRecipe.img}`);

      //APPEND ELEMETS

      imageDivEl.appendChild(imgEl);
      headingEl.appendChild(titleEl);
      articleEl.appendChild(headingEl);
      articleEl.appendChild(imageDivEl);
      mainElement.appendChild(articleEl);

      // OPEN RECIPE FUNCTION

      articleEl.addEventListener("click", showRecipe);

      function showRecipe(e) {
        //todo
      }
    }
  });
