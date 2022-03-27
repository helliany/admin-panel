import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://game-admin.ru/api/",
});

export const authAPI = {
  signup({ email, password, username }) {
    return instance.post("/register", { email, password, username });
  },
  login(username, password) {
    return instance.post("/login", `username=${username}&password=${password}`);
  },
  logout() {
    return fetch("https://game-admin.ru/api/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // return instance.post(`/logout`, {}, { withCredentials: true }).catch((error) => {
    //   console.log(error);
    // });
  },
  usersme() {
    return instance
      .get(`/users/me`, { withCredentials: true })
      .catch((error) => {
        console.log(error);
      });
  },
};
