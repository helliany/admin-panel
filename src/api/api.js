import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://game-admin.ru/api/",
});

export const authAPI = {
  signup({ email, password, username }) {
    return instance.post("/register", { email, password, username })
  },
  login(username, password) {
    return instance.post("/login", { username, password })
  },
  logout() {
    return instance.post(`/logout`);
  },
  usersme() {
    return instance.get(`/users/me`).catch((error) => {
      console.log(error);
    });
  }
};
