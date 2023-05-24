export class User {
  public enabled!: boolean;
  public confirmationToken!: boolean;
  public email!: string;
  public username!: string;
  public password!: string;
  public roles: any = [];
}
