import { DomNode } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";

export default class TraitList extends DomNode {
  constructor(
    dataManager: NFTDataManager,
    traitName: string,
    values: string[],
  ) {
    super(".trait-list");
  }
}
