import { DomNode } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";
export default class PartListItem extends DomNode<HTMLAnchorElement, {
    select: () => void;
    deselect: () => void;
}> {
    private value;
    private checkbox;
    constructor(dataManager: NFTDataManager, partName: string, value: string);
    getValue(): string;
    select(): void;
    deselect(): void;
}
//# sourceMappingURL=PartListItem.d.ts.map