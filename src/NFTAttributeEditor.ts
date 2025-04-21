import { DomNode } from "@commonmodule/app";
import NFTData from "./NFTData.js";
import NFTDataManager from "./NFTDataManager.js";
import PartOptions from "./PartOptions.js";
import TraitList from "./TraitList.js";

export default class NFTAttributeEditor extends DomNode {
  private dataManager: NFTDataManager;

  constructor(options: {
    options: {
      traits?: { [traitName: string]: string[] };
      parts: PartOptions;
    };
    data: NFTData;
  }) {
    super(".nft-attribute-editor");
    this.dataManager = new NFTDataManager(options.data);

    for (
      const [traitName, values] of Object.entries(options.options.traits || {})
    ) {
      const traitList = new TraitList(this.dataManager, traitName, values);
      this.append(traitList);
    }

    this.createPartList();
  }

  private async createPartList() {}
}
