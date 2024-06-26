export interface ILogin {
    userName: string;
    password: string;
  }

  export class Login implements ILogin {
    userName = "";
    password = "";
  }