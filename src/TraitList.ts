import { DomNode } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";
import TraitListItem from "./TraitListItem.js";

export default class TraitList extends DomNode {
  constructor(
    dataManager: NFTDataManager,
    traitName: string,
    values: string[],
  ) {
    super(".trait-list");

    for (const value of values) {
      const traitListItem = new TraitListItem(dataManager, value);
      traitListItem.appendTo(this);
    }
  }
}
