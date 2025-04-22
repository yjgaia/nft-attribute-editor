import { DomNode } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";
import PartListItem from "./PartListItem.js";
export default class PartList extends DomNode<HTMLDivElement, {
    select: (value: string) => void;
}> {
    children: PartListItem[];
    selectedItem: PartListItem | undefined;
    constructor(dataManager: NFTDataManager, partName: string, values: string[]);
    select(value: string): this;
}
//# sourceMappingURL=PartList.d.ts.map