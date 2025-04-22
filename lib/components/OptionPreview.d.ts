import { DomNode } from "@commonmodule/app";
import { SpritesheetData } from "@gaiaengine/dom";
import NFTData from "../data/NFTData.js";
import { PartCategory } from "../data/PartOptions.js";
export default class OptionPreview extends DomNode {
    private gameScreen;
    constructor(categories: PartCategory[], keyToFrame: {
        [key: string]: string;
    }, data: NFTData, spritesheet: SpritesheetData, spritesheetImagePath: string);
    private updateGameScreenSize;
}
//# sourceMappingURL=OptionPreview.d.ts.map