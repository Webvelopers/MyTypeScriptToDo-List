import "./css/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import List from "./models/List";
import Item from "./models/Item";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  const list = List.instance;
  const template = ListTemplate.instance;

  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;

  itemEntryForm.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();

    const input = document.getElementById("newItem") as HTMLInputElement;
    const myEntryText: string = input.value.trim();

    if (!myEntryText) return;

    const itemId: number = list.list.length
      ? parseInt(list.list[list.list.length - 1].id) + 1
      : 1;

    const newItem = new Item(itemId.toString(), myEntryText);

    list.addItem(newItem);
    template.render(list);
    input.value = "";
  });

  const clearItems = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;

  clearItems.addEventListener("click", () => {
    list.clearList();
    template.clear();
  });

  list.load();

  template.render(list);
};

document.addEventListener("DOMContentLoaded", initApp);
