import { DomNode } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";
import TraitListItem from "./TraitListItem.js";

export default class TraitList extends DomNode<HTMLDivElement, {
  select: (value: string) => void;
}> {
  public children: TraitListItem[] = [];
  public selectedItem: TraitListItem | undefined;

  constructor(
    dataManager: NFTDataManager,
    traitName: string,
    values: string[],
  ) {
    super(".trait-list");

    for (const value of values) {
      const item = new TraitListItem(dataManager, traitName, value);
      item.onDom("click", () => this.select(value));
      if (dataManager.getData().traits![traitName] === value) {
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
