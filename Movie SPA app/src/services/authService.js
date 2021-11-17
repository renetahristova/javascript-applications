import * as request from "./requester.js";
import * as api from "./api.js";

function saveData({ accessToken, email, _id }) {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("email", email);
  localStorage.setItem("_id", _id);
}

export function getData() {
  let _id = localStorage.getItem("id");
  let email = localStorage.getItem("email");
  let token = localStorage.getItem("accessToken");

  return {
    _id,
    email,
    token,
  };
}
export function login(email, password) {
  return request.post(api.login, { email, password }).then((data) => {
    saveData(data);
  });
}

export function isAuthenticated() {
  let token = localStorage.getItem("accessToken");
  return Boolean(token);
}
