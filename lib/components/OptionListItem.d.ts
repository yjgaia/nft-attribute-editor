import { Dom } from "@commonmodule/app";
import { SpritesheetData } from "@gaiaengine/dom";
import { NFTData } from "nft-data";
import { PartCategory } from "../data/PartOptions.js";
export default class OptionListItem extends Dom<HTMLDivElement, {
    select: () => void;
    deselect: () => void;
}> {
    private data;
    private checkbox;
    constructor(categories: PartCategory[], keyToFrame: {
        [key: string]: string;
    }, data: NFTData, value: string, spritesheet: SpritesheetData, spritesheetImagePath: string);
    getData(): NFTData;
    select(): void;
    deselect(): void;
}
//# sourceMappingURL=OptionListItem.d.ts.map