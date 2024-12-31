import List from "../models/List";

export interface ListTemplateInterface {
  ul: HTMLUListElement;
  clear(): void;
  render(list: List): void;
}
