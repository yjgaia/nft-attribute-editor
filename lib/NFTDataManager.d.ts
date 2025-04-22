import { SpritesheetData } from "@gaiaengine/dom";
import KeyToSprite from "./KeyToSprite.js";
import NFTData from "./NFTData.js";
export default class NFTDataManager {
    private data;
    private keyToSprite;
    private spritesheet;
    private spritesheetImagePath;
    constructor(data: NFTData, keyToSprite: KeyToSprite, spritesheet: SpritesheetData, spritesheetImagePath: string);
    getDataClone(): NFTData;
    getTraitValue(traitName: string): string | undefined;
    getKeyToSprite(): KeyToSprite;
    getSpritesheet(): SpritesheetData;
    getSpritesheetImagePath(): string;
}
//# sourceMappingURL=NFTDataManager.d.ts.map