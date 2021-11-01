let buttonElement = document.getElementById("load-button");

buttonElement.addEventListener("click", function loadRepos() {
  let url = "https://api.github.com/users/testnakov/repos";

  const httpRequest = new XMLHttpRequest();

  httpRequest.addEventListener("readystatechange", function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      document.getElementById("res").textContent = httpRequest.responseText;
    }
  });

  httpRequest.open("GET", url);

  httpRequest.send();
});
// Your task is to write a JS function that loads a github repository asynchronously with AJAX. You should
// create an instance of XmlHttpRequest and attach an onreadystatechange event to it.
