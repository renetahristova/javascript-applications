let buttonElement = document.getElementById("load-button");
let ulElement = document.getElementById("repos");
let inputValue = document.getElementById("username").value;

let url = `https://api.github.com/repos/${inputValue}/repos`;
ulElement.innerHTML = "";

function loadRepos() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((obj) => {
        let liElement = document.createElement("li");
        let aElement = document.createElement("a");
        aElement.setAttribute("href", obj.html_url);
        aElement.textContent = obj.full_name;

        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
      });
    })
    .catch((error) => {
      let liElement = document.createElement("li");
      liElement.textContent = "Error: ${error.status} (Not Found)";
      ulElement.appendChild(liElement);
    });
}
//https://api.github.com/repos/username/repository/commits
// Your task is to write a JS function that executes an AJAX request with Fetch API and loads all user github
// repositories by a given username (taken from an input field with id username) into a list (each
// repository as a list-item) with id repos. Use the properties full_name and html_url of the returned
// objects to create a link to each repo’s GitHub page. If an error occurs (like 404 “Not Found”), append to
// the list a list-item with text the current instead. Clear the contents of the list before any new content is
// appended. See the highlighted lines of the skeleton for formatting details of each list item.
