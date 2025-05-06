import { DomNode } from "@commonmodule/app";
import { SpritesheetData } from "@gaiaengine/dom";
import { NFTData } from "nft-data";
import KeyToFrame from "../data/KeyToFrame.js";
import PartOptions from "../data/PartOptions.js";
export interface NFTAttributeEditorOptions {
    traitOptions?: {
        [traitName: string]: string[];
    };
    partOptions: PartOptions;
    baseData: NFTData;
    keyToFrame: KeyToFrame;
    spritesheet: SpritesheetData;
    spritesheetImagePath: string;
}
export default class NFTAttributeEditor extends DomNode<HTMLDivElement, {
    dataChanged: (data: NFTData) => void;
}> {
    private options;
    private data;
    private savedScrollTop;
    private accordion;
    private traitAccordionItems;
    private partAccordionItems;
    constructor(options: NFTAttributeEditorOptions);
    private saveScrollTop;
    private restoreScrollTop;
    private cloneData;
    private getPartCategoriesAndFrames;
    private cleanData;
    private createTraitOptionLists;
    private createPartOptionLists;
    getData(): NFTData;
}
//# sourceMappingURL=NFTAttributeEditor.d.ts.map