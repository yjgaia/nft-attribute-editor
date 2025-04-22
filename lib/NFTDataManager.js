export default class NFTDataManager {
    options;
    constructor(options) {
        this.options = options;
    }
    getData() {
        return this.options.data;
    }
    getDataClone() {
        return JSON.parse(JSON.stringify(this.options.data));
    }
    getPartCategories(trait1, trait2) {
        if (trait1 && trait2) {
            return this.options.options.parts[trait1][trait2];
        }
        else if (trait1) {
            return this.options.options.parts[trait1];
        }
        else {
            return this.options.options.parts;
        }
    }
    getKeyToSprite() {
        return this.options.keyToFrame;
    }
    getSpritesheet() {
        return this.options.spritesheet;
    }
    getSpritesheetImagePath() {
        return this.options.spritesheetImagePath;
    }
}
//# sourceMappingURL=NFTDataManager.js.map