import * as axios from "axios";

const instance = axios.create({
  baseURL: "",
});

export const authAPI = {
  login(username, password) {
    return instance.post("", { username, password }).catch((error) => {
      console.log(error);
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
