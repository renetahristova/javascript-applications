function loadCommits() {
  let userElement = document.getElementById(`username`).value;
  let repoElement = document.getElementById(`repo`).value;
  let ulElement = document.getElementById(`commits`);

  let url = `https://api.github.com/repos/${userElement}/${repoElement}/commits`;

  fetch(url)
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) =>
      data.forEach(function (obj) {
        let createLi = document.createElement(`li`);
        createLi.textContent = `${obj.commit.author.name}: ${obj.commit.message}`;
        ulElement.appendChild(createLi);
        console.log(obj);
      })
    )
    .catch(function (error) {
      let createLi = document.createElement(`li`);
      console.log(error);
      createLi.textContent = error;
      ulElement.appendChild(createLi);
    });
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(`${response.status} (${response.statusText})`);
    }
    return response;
  }
}
