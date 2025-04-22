import { DomNode } from "@commonmodule/app";
import TraitListItem from "./TraitListItem.js";
export default class TraitList extends DomNode {
    children = [];
    selectedItem;
    constructor(dataManager, traitName, values) {
        super(".trait-list");
        for (const value of values) {
            const item = new TraitListItem(dataManager, traitName, value);
            item.onDom("click", () => this.select(value));
            if (dataManager.getData().traits[traitName] === value) {
                item.select();
                this.selectedItem = item;
            }
            item.appendTo(this);
        }
    }
    select(value) {
        this.selectedItem?.deselect();
        this.selectedItem = this.children.find((c) => c.getValue() === value);
        this.selectedItem?.select();
        this.emit("select", value);
        return this;
    }
}
//# sourceMappingURL=TraitList.js.map