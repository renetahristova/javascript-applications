navElement.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName == "A") {
    let dataLink = e.target.getAttribute("data-link");
    let currentView = pages[dataLink];
  }
});
