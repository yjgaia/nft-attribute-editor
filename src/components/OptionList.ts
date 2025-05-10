import { Dom } from "@commonmodule/app";
import { NFTData } from "nft-data";
import OptionListItem from "./OptionListItem.js";

export default class OptionList extends Dom<HTMLDivElement, {
  select: (selectedData: NFTData) => void;
}> {
  public children: OptionListItem[] = [];
  public selectedItem?: OptionListItem;

  constructor() {
    super(".option-list");
  }

  public addItem(item: OptionListItem) {
    this.append(item);
    item.on("click", () => {
      this.selectedItem?.deselect();
      this.selectedItem = item;
      item.select();
      this.emit("select", item.getData());
    });
  }
}
