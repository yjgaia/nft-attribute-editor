import { DomNode, el } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";
import TraitOrPartPreview from "./TraitOrPartPreview.js";

export default class PartListItem extends DomNode {
  private checkIconContainer: DomNode;

  constructor(dataManager: NFTDataManager, partName: string, value: string) {
    super("a.part-list-item");

    const dataClone = dataManager.getDataClone();
    dataClone.parts[partName] = value;

    this.append(
      new TraitOrPartPreview(dataManager, dataClone),
      el(".value", value),
      this.checkIconContainer = el(".check-icon-container"),
    );
  }
}
