import { DomNode } from "@commonmodule/app";
import PartListItem from "./PartListItem.js";
export default class PartList extends DomNode {
    children = [];
    selectedItem;
    constructor(dataManager, partName, values) {
        super(".part-list");
        for (const value of values) {
            const item = new PartListItem(dataManager, partName, value);
            item.onDom("click", () => this.select(value));
            if (dataManager.getData().parts[partName] === value) {
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
//# sourceMappingURL=PartList.js.map