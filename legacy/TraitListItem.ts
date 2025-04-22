import { DomNode, el } from "@commonmodule/app";
import { Checkbox } from "@commonmodule/app-components";
import NFTDataManager from "./NFTDataManager.js";
import { PartCategory } from "./PartOptions.js";
import TraitOrPartPreview from "./TraitOrPartPreview.js";

export default class TraitListItem extends DomNode<HTMLAnchorElement, {
  select: () => void;
  deselect: () => void;
}> {
  private checkbox: Checkbox;

  constructor(
    dataManager: NFTDataManager,
    traitName: string,
    private value: string,
  ) {
    super("a.trait-list-item");

    const dataClone = dataManager.getDataClone();
    dataClone.traits![traitName] = value;

    const traitCount = Object.keys(dataClone.traits!).length;
    let categories: PartCategory[];

    if (traitCount === 1) {
      const traitName = Object.keys(dataClone.traits!)[0];
      const trait = dataClone.traits![traitName];
      categories = dataManager.getPartCategories(trait);
    } else if (traitCount === 2) {
      const traitNames = Object.keys(dataClone.traits!);
      const trait1 = dataClone.traits![traitNames[0]];
      const trait2 = dataClone.traits![traitNames[1]];
      categories = dataManager.getPartCategories(trait1, trait2);
    } else {
      throw new Error("Unsupported trait count");
    }

    const defaultParts: { [trait: string]: string } = {};
    for (const category of categories) {
      if (category.parts.length > 0) {
        defaultParts[category.name] = category.parts[0].name;
      }
    }
    dataClone.parts = defaultParts;

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
