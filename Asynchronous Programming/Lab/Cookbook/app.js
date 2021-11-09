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
      let id = currentRecipe._id;
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
        let articleElement = e.currentTarget;
        console.log(articleElement);

        let divTitle = articleElement.querySelector(".title");
        let heading = articleElement.querySelector(".title h2");
        // articleElement.appendChild(heading);
        // divTitle.remove();

        let bandDiv = document.createElement("div");
        bandDiv.className = "band";

        let divElement = document.createElement("div");
        divElement.className = "ingredients";

        let imgDiv = articleElement.querySelector(".small");
        imgDiv.className = "thumb";
        bandDiv.appendChild(imgDiv);

        let ingrdElement = document.createElement("h3");
        ingrdElement.textContent = "Ingredients:";

        let ulElement = document.createElement("ul");
        //let liElement = document.createElement("li");

        let descriptionElement = document.createElement("div");
        descriptionElement.className = "description";
        let prepElement = document.createElement("h3");
        prepElement.textContent = "Preparation";

        //let pElement = document.createElement("p");

        descriptionElement.appendChild(prepElement);

        fetch(`${url}/details/${id}`)
          .then((response) => response.json())
          .then((rec) => {
            console.log(rec);
            let array = rec.ingredients;
            array.forEach((e) => {
              let liElement = document.createElement("li");
              liElement.textContent = e;
              ulElement.appendChild(liElement);
            });
            let prep = rec.steps;
            prep.forEach((e) => {
              let paragraph = document.createElement("p");
              paragraph.textContent = e;
              descriptionElement.appendChild(paragraph);
            });
          });

        divElement.appendChild(liElement);
        bandDiv.appendChild(divElement);
        articleElement.appendChild(bandDiv);
        articleElement.appendChild(descriptionElement);
      }
    }
  });
