import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://game-admin.ru/api/",
});

export const authAPI = {
  signup({ email, password, username }) {
    return instance.post("/register", { email, password, name: username });
  },
  login(email, password) {
    return instance.post("/login", { email, password });
  },
  logout() {
    return instance.get(`/logout`, { withCredentials: true }).catch((error) => {
      console.log(error);
    });
  },
  usersme() {
    return instance.get(`/me`, { withCredentials: true }).catch((error) => {
      console.log(error);
    });
  },
};
