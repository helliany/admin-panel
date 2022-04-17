import axios from "axios";
import { IUserMoney } from "../types/userMoney.model";
import { IUserOnline } from "../types/userOnline.model";

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
    return instance.post<IUserMoney>(`/main_page/user_money`, {})
  },
  useronline(date: { start: string; end: string; }) {
    return instance.post<{graph_info: IUserOnline[]}>(`/main_page/graph_online`, {date_start: date.start, date_end: date.end})
  }
};

export const modelsAPI = {
  models() {
    return instance.get(`/models/all`);
  },
  model(name: string) {
    return instance.get(`/model?model_name=${name}`);
  }
};