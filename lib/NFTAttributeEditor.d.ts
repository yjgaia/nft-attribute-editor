import { DomNode } from "@commonmodule/app";
import NFTAttributeEditorOptions from "./NFTAttributeEditorOptions.js";
import NFTData from "./NFTData.js";
export default class NFTAttributeEditor extends DomNode<HTMLDivElement, {
    dataChanged: (data: NFTData) => void;
}> {
    private traitOptions;
    private partOptions;
    private dataManager;
    private accordion;
    private partAccordionItems;
    constructor(options: NFTAttributeEditorOptions);
    private createPartList;
}
//# sourceMappingURL=NFTAttributeEditor.d.ts.map