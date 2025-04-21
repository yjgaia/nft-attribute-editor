import { DomNode } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";

export default class TraitListItem extends DomNode {
  constructor(dataManager: NFTDataManager, value: string) {
    super(".trait-list-item");
  }
}
