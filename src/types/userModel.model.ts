export interface IUserModel {
  active_search: boolean;
  data: IUserModalData[];
}

export interface IUserModalData {
  [key: string]: string | number;
}
