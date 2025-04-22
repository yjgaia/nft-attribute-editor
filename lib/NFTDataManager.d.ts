import NFTAttributeEditorOptions from "./NFTAttributeEditorOptions.js";
import NFTData from "./NFTData.js";
import { PartCategory } from "./PartOptions.js";
export default class NFTDataManager {
    private options;
    constructor(options: NFTAttributeEditorOptions);
    getData(): NFTData;
    getDataClone(): NFTData;
    getPartCategories(trait1?: string, trait2?: string): PartCategory[];
    getKeyToSprite(): import("./KeyToFrame.js").default;
    getSpritesheet(): import("@gaiaengine/dom").SpritesheetData;
    getSpritesheetImagePath(): string;
}
//# sourceMappingURL=NFTDataManager.d.ts.map