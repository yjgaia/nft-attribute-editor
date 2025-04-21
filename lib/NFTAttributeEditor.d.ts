import { DomNode } from "@commonmodule/app";
import NFTData from "./NFTData.js";
import PartOptions from "./PartOptions.js";
export default class NFTAttributeEditor extends DomNode {
    private traitOptions;
    private partOptions;
    private dataManager;
    private accordion;
    private partAccordionItems;
    constructor(options: {
        options: {
            traits?: {
                [traitName: string]: string[];
            };
            parts: PartOptions;
        };
        data: NFTData;
    });
    private createPartList;
}
//# sourceMappingURL=NFTAttributeEditor.d.ts.map