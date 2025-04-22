import NFTAttributeEditorOptions from "./NFTAttributeEditorOptions.js";
import NFTData from "./NFTData.js";
import { PartCategory } from "./PartOptions.js";

export default class NFTDataManager {
  constructor(private options: NFTAttributeEditorOptions) {}

  public getData(): NFTData {
    return this.options.data;
  }

  public getDataClone(): NFTData {
    return JSON.parse(JSON.stringify(this.options.data));
  }

  public getPartCategories(trait1?: string, trait2?: string): PartCategory[] {
    if (trait1 && trait2) {
      return (this.options.options.parts as any)[trait1][trait2];
    } else if (trait1) {
      return (this.options.options.parts as any)[trait1];
    } else {
      return this.options.options.parts as PartCategory[];
    }
  }

  public getKeyToSprite() {
    return this.options.keyToFrame;
  }

  public getSpritesheet() {
    return this.options.spritesheet;
  }

  public getSpritesheetImagePath() {
    return this.options.spritesheetImagePath;
  }
}
