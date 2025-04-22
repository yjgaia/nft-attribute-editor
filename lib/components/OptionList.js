import { DomNode } from "@commonmodule/app";
export default class OptionList extends DomNode {
    children = [];
    selectedItem;
    constructor() {
        super(".option-list");
    }
    addItem(item) {
        this.append(item);
        item.onDom("click", () => {
            this.selectedItem?.deselect();
            this.selectedItem = item;
            item.select();
            this.emit("select", item.getData());
        });
    }
}
//# sourceMappingURL=OptionList.js.map