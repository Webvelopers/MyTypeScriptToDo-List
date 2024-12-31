import { ListTemplateInterface } from "../interfaces/ListTemplateInterface";
import List from "../models/List";

export default class ListTemplate implements ListTemplateInterface {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();
  private constructor() {
    this.ul = document.getElementById("list") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(list: List): void {
    this.clear();

    list.list.forEach((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "flex items-center pt-4 gap-4";

      const inputCheck = document.createElement("input") as HTMLInputElement;
      inputCheck.type = "checkbox";
      inputCheck.id = item.id;
      inputCheck.className =
        "peer text-center min-w-[2.5rem] min-h-[2.5rem] cursor-pointer";
      inputCheck.tabIndex = 0;
      inputCheck.checked = item.checked;
      li.append(inputCheck);

      inputCheck.addEventListener("change", () => {
        item.checked = !item.checked;
        list.save();
      });

      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = item.id;
      label.className = "peer-checked:line-through flex-grow break-all";
      label.textContent = item.description;
      li.append(label);

      const inputText = document.createElement("input") as HTMLInputElement;
      inputText.type = "text";
      inputText.id = item.id;
      inputText.value = item.description;
      inputText.className =
        "hidden flex-grow break-all text-gray-700 px-2 border-1 border-dashed rounded-lg hover:border-gray-100 focus:border-gray-100";
      li.append(inputText);

      const editButton = document.createElement("button") as HTMLButtonElement;
      editButton.className =
        "rounded-md min-w-[48px] min-h-[48px] hover:cursor-pointer hover:text-yellow-300 focus:text-yellow-300";
      editButton.innerHTML = `<i class="fas fa-pencil"></i>`;
      li.append(editButton);

      editButton.addEventListener("click", () => {
        label.classList.add("hidden");
        editButton.classList.add("hidden");
        deleteButton.classList.add("hidden");
        inputText.classList.remove("hidden");
        inputText.classList.remove("hidden");
        inputText.focus();

        inputText.addEventListener("blur", () => {
          item.description = inputText.value;
          list.saveItem(item);
          this.render(list);
        });

        inputText.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            item.description = inputText.value;
            list.saveItem(item);
            this.render(list);
          }
        });
      });

      const deleteButton = document.createElement(
        "button"
      ) as HTMLButtonElement;
      deleteButton.className =
        "rounded-md min-w-[48px] min-h-[48px] hover:cursor-pointer hover:text-red-500 focus:text-red-500";
      deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
      li.append(deleteButton);

      deleteButton.addEventListener("click", () => {
        list.removeItem(item.id);
        this.render(list);
      });

      this.ul.prepend(li);
    });
  }
}
