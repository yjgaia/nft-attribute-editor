import { Dom } from "@commonmodule/app";
import { SpritesheetData } from "@gaiaengine/dom";
import { NFTData } from "nft-data";
import { PartCategory } from "../data/PartOptions.js";
export default class OptionPreview extends Dom {
    private gameScreen;
    constructor(categories: PartCategory[], keyToFrame: {
        [key: string]: string;
    }, data: NFTData, spritesheet: SpritesheetData, spritesheetImagePath: string);
    private updateGameScreenSize;
}
//# sourceMappingURL=OptionPreview.d.ts.map