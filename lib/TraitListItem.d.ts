import { DomNode } from "@commonmodule/app";
import NFTDataManager from "./NFTDataManager.js";
export default class TraitListItem extends DomNode<HTMLAnchorElement, {
    select: () => void;
    deselect: () => void;
}> {
    private value;
    private checkbox;
    constructor(dataManager: NFTDataManager, traitName: string, value: string);
    getValue(): string;
    select(): void;
    deselect(): void;
}
//# sourceMappingURL=TraitListItem.d.ts.map