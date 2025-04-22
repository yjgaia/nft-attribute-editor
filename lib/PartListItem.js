import { DomNode, el } from "@commonmodule/app";
import { Checkbox } from "@commonmodule/app-components";
import TraitOrPartPreview from "./TraitOrPartPreview.js";
export default class PartListItem extends DomNode {
    value;
    checkbox;
    constructor(dataManager, partName, value) {
        super("a.part-list-item");
        this.value = value;
        const dataClone = dataManager.getDataClone();
        dataClone.parts[partName] = value;
        this.append(new TraitOrPartPreview(dataManager, dataClone), el(".value", value), this.checkbox = new Checkbox());
    }
    getValue() {
        return this.value;
    }
    select() {
        this.checkbox.checked = true;
    }
    deselect() {
        this.checkbox.checked = false;
    }
}
//# sourceMappingURL=PartListItem.js.map