import { DomNode } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";
import PartListItem from "./PartListItem.js";

export default class PartList extends DomNode<HTMLDivElement, {
  select: (value: string) => void;
}> {
  public children: PartListItem[] = [];
  public selectedItem: PartListItem | undefined;

  constructor(dataManager: NFTDataManager, partName: string, values: string[]) {
    super(".part-list");

    for (const value of values) {
      const item = new PartListItem(dataManager, partName, value);
      item.onDom("click", () => this.select(value));
      if (dataManager.getData().parts[partName] === value) {
        item.select();
        this.selectedItem = item;
      }
      item.appendTo(this);
    }
  }

  public select(value: string) {
    this.selectedItem?.deselect();
    this.selectedItem = this.children.find((c) => c.getValue() === value);
    this.selectedItem?.select();
    this.emit("select", value);
    return this;
  }
}
