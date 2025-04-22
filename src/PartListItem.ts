import { DomNode } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";

export default class PartListItem extends DomNode {
  constructor(dataManager: NFTDataManager, value: string) {
    super("a.part-list-item");
  }
}
