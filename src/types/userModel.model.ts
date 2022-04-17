export interface IUserModel {
  active_search: boolean;
  data: IUserModalData[];
}

interface IUserModalData {
  [key: string]: string | number;
}
