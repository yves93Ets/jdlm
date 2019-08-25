export class UserModel {
  public id: number;
  public name: string;
  public lastame: string;
  public mail: string;

  constructor(mail) {
    this.id = Math.random();
    this.mail = mail;
  }
}
