import { DomNode, el } from "@commonmodule/app";
import { Checkbox } from "@commonmodule/app-components";
import NFTDataManager from "./NFTDataManager.js";
import TraitOrPartPreview from "./TraitOrPartPreview.js";

export default class PartListItem extends DomNode<HTMLAnchorElement, {
  select: () => void;
  deselect: () => void;
}> {
  private checkbox: Checkbox;

  constructor(
    dataManager: NFTDataManager,
    partName: string,
    private value: string,
  ) {
    super("a.part-list-item");

    const dataClone = dataManager.getDataClone();
    dataClone.parts[partName] = value;

    this.append(
      new TraitOrPartPreview(dataManager, dataClone),
      el(".value", value),
      this.checkbox = new Checkbox(),
    );
  }

  public getValue() {
    return this.value;
  }

  public select() {
    this.checkbox.checked = true;
  }

  public deselect() {
    this.checkbox.checked = false;
  }
}
