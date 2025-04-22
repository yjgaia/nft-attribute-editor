import { DomNode } from "@commonmodule/app";
import { SpritesheetData } from "@gaiaengine/dom";
import KeyToFrame from "../data/KeyToFrame.js";
import NFTData from "../data/NFTData.js";
import PartOptions from "../data/PartOptions.js";
export default class NFTAttributeEditor extends DomNode<HTMLDivElement, {
    dataChanged: (data: NFTData) => void;
}> {
    private options;
    private baseData;
    private savedScrollTop;
    private accordion;
    private traitAccordionItems;
    private partAccordionItems;
    constructor(options: {
        traitOptions?: {
            [traitName: string]: string[];
        };
        partOptions: PartOptions;
        baseData: NFTData;
        keyToFrame: KeyToFrame;
        spritesheet: SpritesheetData;
        spritesheetImagePath: string;
    });
    private saveScrollTop;
    private restoreScrollTop;
    private cloneData;
    private getPartCategoriesAndFrames;
    private cleanData;
    private createTraitOptionLists;
    private createPartOptionLists;
}
//# sourceMappingURL=NFTAttributeEditor.d.ts.map