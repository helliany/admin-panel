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
    return instance.get(`/me`, { withCredentials: true });
  },
};

export const homeAPI = {
  usermoney() {
    return instance.post(`/main_page/user_money`, {}, { withCredentials: true }).catch((error) => {
      console.log(error);
    });
  },
  useronline(date) {
    return instance.post(`/main_page/graph_online`, {date_start: date.start, date_end: date.end}, { withCredentials: true })
  }
};

export const modelsAPI = {
  models() {
    return instance.get(`/models/all`, { withCredentials: true });
  },
  model(name) {
    return instance.get(`/model?model_name=${name}`, { withCredentials: true });
  }
};
