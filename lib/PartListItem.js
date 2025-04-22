import { DomNode, el } from "@commonmodule/app";
import TraitOrPartPreview from "./TraitOrPartPreview.js";
export default class PartListItem extends DomNode {
    checkIconContainer;
    constructor(dataManager, partName, value) {
        super("a.part-list-item");
        const dataClone = dataManager.getDataClone();
        dataClone.parts[partName] = value;
        this.append(new TraitOrPartPreview(dataManager, dataClone), el(".value", value), this.checkIconContainer = el(".check-icon-container"));
    }
}
//# sourceMappingURL=PartListItem.js.map