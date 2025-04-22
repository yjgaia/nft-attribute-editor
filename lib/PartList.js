import { DomNode } from "@commonmodule/app";
import PartListItem from "./PartListItem.js";
export default class PartList extends DomNode {
    constructor(dataManager, partName, values) {
        super(".part-list");
        for (const value of values) {
            const partListItem = new PartListItem(dataManager, value);
            partListItem.appendTo(this);
        }
    }
}
//# sourceMappingURL=PartList.js.map