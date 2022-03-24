import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://82.146.34.31/",
});

export const authAPI = {
  signup({ email, password, username }) {
    return instance.post("/auth/register/", { email, password, username }).catch((error) => {
      console.log(error);
    });
  },
  login(username, password) {
    return instance.post("", { username, password }).catch((error) => {
      console.log(error);
    });
  },
  logout() {
    return instance.delete(`/auth/login/`);
  },
};
