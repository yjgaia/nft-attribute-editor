import { DomNode, el } from "@commonmodule/app";
import { Checkbox } from "@commonmodule/app-components";
import { StringUtils } from "@commonmodule/ts";
import { SpritesheetData } from "@gaiaengine/dom";
import NFTData from "../data/NFTData.js";
import { PartCategory } from "../data/PartOptions.js";
import OptionPreview from "./OptionPreview.js";

export default class OptionListItem extends DomNode<HTMLDivElement, {
  select: () => void;
  deselect: () => void;
}> {
  private checkbox: Checkbox;

  constructor(
    categories: PartCategory[],
    keyToFrame: { [key: string]: string },
    private data: NFTData,
    value: string,
    spritesheet: SpritesheetData,
    spritesheetImagePath: string,
  ) {
    super(".option-list-item");

    this.append(
      new OptionPreview(
        categories,
        keyToFrame,
        data,
        spritesheet,
        spritesheetImagePath,
      ),
      el(".value", StringUtils.capitalize(value)),
      this.checkbox = new Checkbox(),
    );
  }

  public getData() {
    return this.data;
  }

  public select() {
    this.checkbox.checked = true;
  }

  public deselect() {
    this.checkbox.checked = false;
  }
}
