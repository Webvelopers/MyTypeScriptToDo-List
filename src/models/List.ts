import { ListInterface } from "../interfaces/ListInterface";
import Item from "./Item";

export default class List implements ListInterface {
  static instance: List = new List();

  private constructor(private _list: Item[] = []) {}

  get list(): Item[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myTodoList");

    if (typeof storedList !== "string") return;

    const parsedList: {
      _id: string;
      _description: string;
      _checked: boolean;
    }[] = JSON.parse(storedList);

    parsedList.forEach((itemObj) => {
      const newListItem = new Item(
        itemObj._id,
        itemObj._description,
        itemObj._checked
      );

      List.instance.addItem(newListItem);
    });
  }

  save(): void {
    localStorage.setItem("myTodoList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: Item): void {
    this._list.push(itemObj);
    this.save();
  }

  saveItem(itemObj: Item): void {
    const index = this._list.findIndex((item) => item.id === itemObj.id);
    if (index !== -1) {
      this._list[index].description = itemObj.description;
      this.save();
    }
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
