import { DomNode } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";
import PartListItem from "./PartListItem.js";

export default class PartList extends DomNode {
  constructor(dataManager: NFTDataManager, partName: string, values: string[]) {
    super(".part-list");

    for (const value of values) {
      const partListItem = new PartListItem(dataManager, partName, value);
      partListItem.appendTo(this);
    }
  }
}
