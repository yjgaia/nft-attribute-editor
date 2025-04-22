export default class NFTDataManager {
    data;
    keyToSprite;
    spritesheet;
    spritesheetImagePath;
    constructor(data, keyToSprite, spritesheet, spritesheetImagePath) {
        this.data = data;
        this.keyToSprite = keyToSprite;
        this.spritesheet = spritesheet;
        this.spritesheetImagePath = spritesheetImagePath;
    }
    getDataClone() {
        return JSON.parse(JSON.stringify(this.data));
    }
    getTraitValue(traitName) {
        return this.data.traits?.[traitName];
    }
    getKeyToSprite() {
        return this.keyToSprite;
    }
    getSpritesheet() {
        return this.spritesheet;
    }
    getSpritesheetImagePath() {
        return this.spritesheetImagePath;
    }
}
//# sourceMappingURL=NFTDataManager.js.map