import Item from "../models/Item";

export interface ListInterface {
  list: Item[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: Item): void;
  saveItem(itemObj: Item): void;
  removeItem(id: string): void;
}
