import { Dom } from "@commonmodule/app";
export default class OptionList extends Dom {
    children = [];
    selectedItem;
    constructor() {
        super(".option-list");
    }
    addItem(item) {
        this.append(item);
        item.on("click", () => {
            this.selectedItem?.deselect();
            this.selectedItem = item;
            item.select();
            this.emit("optionSelected", item.getData());
        });
    }
}
//# sourceMappingURL=OptionList.js.map