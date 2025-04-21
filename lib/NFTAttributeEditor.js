import { DomNode } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";
import TraitList from "./TraitList.js";
export default class NFTAttributeEditor extends DomNode {
    dataManager;
    constructor(options) {
        super(".nft-attribute-editor");
        this.dataManager = new NFTDataManager(options.data);
        for (const [traitName, values] of Object.entries(options.options.traits || {})) {
            const traitList = new TraitList(this.dataManager, traitName, values);
            this.append(traitList);
        }
        this.createPartList();
    }
    async createPartList() { }
}
//# sourceMappingURL=NFTAttributeEditor.js.map