import { DomNode } from "@commonmodule/app";
import TraitListItem from "./TraitListItem.js";
export default class TraitList extends DomNode {
    constructor(dataManager, traitName, values) {
        super(".trait-list");
        for (const value of values) {
            const traitListItem = new TraitListItem(dataManager, traitName, value);
            traitListItem.appendTo(this);
        }
    }
}
//# sourceMappingURL=TraitList.js.map