import { DomNode } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";
import TraitListItem from "./TraitListItem.js";
export default class TraitList extends DomNode<HTMLDivElement, {
    select: (value: string) => void;
}> {
    children: TraitListItem[];
    selectedItem: TraitListItem | undefined;
    constructor(dataManager: NFTDataManager, traitName: string, values: string[]);
    select(value: string): this;
}
//# sourceMappingURL=TraitList.d.ts.map