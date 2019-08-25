export class ItemModel {
  public id: number;
  public name: string;

  constructor(name) {
    this.id = Math.random();
    this.name = name;
  }
}
