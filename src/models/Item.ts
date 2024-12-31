import { ItemInterface } from "../interfaces/ItemInterface";

export default class Item implements ItemInterface {
  constructor(
    private _id: string = "",
    private _description: string = "",
    private _checked: boolean = false
  ) {}

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(checked: boolean) {
    this._checked = checked;
  }
}
