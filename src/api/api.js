import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://game-admin.ru/",
});

export const authAPI = {
  signup({ email, password, username }) {
    return instance.post("/auth/register/", { email, password, username }).catch((error) => {
      console.log(error);
    });
  },
  login(username, password) {
    return instance.post("/auth/cookie/login/", { username, password }).catch((error) => {
      console.log(error);
    });
  },
  logout() {
    return instance.post(`/auth/cookie/logout`);
  },
};
