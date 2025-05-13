import { Dom } from "@commonmodule/app";
import { NFTData } from "nft-data";
import OptionListItem from "./OptionListItem.js";
export default class OptionList extends Dom<HTMLDivElement, {
    optionSelected: (selectedData: NFTData) => void;
}> {
    children: OptionListItem[];
    selectedItem?: OptionListItem;
    constructor();
    addItem(item: OptionListItem): void;
}
//# sourceMappingURL=OptionList.d.ts.map