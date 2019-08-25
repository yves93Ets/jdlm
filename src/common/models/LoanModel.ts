// import { ItemModel } from "./ItemModel";
// import { UserModel } from "./UserModel";

// export type LoanModel = {
//   id: number;
//   user: UserModel;
//   item: ItemModel;
//   note: string;
//   loanDate: string;
// };

// export const LoanModel: LoanModel = {
//   id: 1,
//   user: UserModel,
//   item: ItemModel,
//   note: "this is a note",
//   loanDate: new Date().toLocaleDateString()
// };

import { ItemModel } from "./ItemModel";
import { UserModel } from "./UserModel";

export class LoanModel {
  public id: number;
  public user: UserModel;
  public item: ItemModel;
  public note: string;
  public loanDate: string;

  constructor(user, item, note) {
    this.id = 1;
    this.user = user;
    this.item = item;
    this.note = note;
    this.loanDate = new Date().toDateString();
  }
}
