import { SpritesheetData } from "@gaiaengine/dom";
import KeyToSprite from "./KeyToSprite.js";
import NFTData from "./NFTData.js";

export default class NFTDataManager {
  constructor(
    private data: NFTData,
    private keyToSprite: KeyToSprite,
    private spritesheet: SpritesheetData,
    private spritesheetImagePath: string,
  ) {}

  public getDataClone(): NFTData {
    return JSON.parse(JSON.stringify(this.data));
  }

  public getTraitValue(traitName: string): string | undefined {
    return this.data.traits?.[traitName];
  }

  public getKeyToSprite() {
    return this.keyToSprite;
  }

  public getSpritesheet() {
    return this.spritesheet;
  }

  public getSpritesheetImagePath() {
    return this.spritesheetImagePath;
  }
}
