import { DomNode } from "@commonmodule/app";
import NFTData from "../data/NFTData.js";
import OptionListItem from "./OptionListItem.js";
export default class OptionList extends DomNode<HTMLDivElement, {
    select: (selectedData: NFTData) => void;
}> {
    children: OptionListItem[];
    selectedItem?: OptionListItem;
    constructor();
    addItem(item: OptionListItem): void;
}
//# sourceMappingURL=OptionList.d.ts.map