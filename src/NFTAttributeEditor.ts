import { DomNode } from "@commonmodule/app";
import { Accordion, AccordionItem } from "@commonmodule/app-components";
import { StringUtils } from "@commonmodule/ts";
import NFTData from "./NFTData.js";
import NFTDataManager from "./NFTDataManager.js";
import PartList from "./PartList.js";
import PartOptions, { PartCategory } from "./PartOptions.js";
import TraitList from "./TraitList.js";

export default class NFTAttributeEditor extends DomNode {
  private traitOptions: { [traitName: string]: string[] };
  private partOptions: PartOptions;
  private dataManager: NFTDataManager;

  private accordion: Accordion;
  private partAccordionItems: AccordionItem[] = [];

  constructor(options: {
    options: {
      traits?: { [traitName: string]: string[] };
      parts: PartOptions;
    };
    data: NFTData;
  }) {
    super(".nft-attribute-editor");

    this.traitOptions = options.options.traits || {};
    this.partOptions = options.options.parts;
    this.dataManager = new NFTDataManager(options.data);

    this.accordion = new Accordion().appendTo(this);

    for (
      const [traitName, values] of Object.entries(options.options.traits || {})
    ) {
      const traitList = new TraitList(this.dataManager, traitName, values);
      this.accordion.append(
        new AccordionItem({
          label: StringUtils.capitalize(traitName),
          open: true,
        }, traitList),
      );
    }

    this.createPartList();
  }

  private async createPartList() {
    for (const partAccordionItem of this.partAccordionItems) {
      partAccordionItem.remove();
    }
    this.partAccordionItems = [];

    let categories: PartCategory[] = [];

    const traitCount = Object.keys(this.traitOptions).length;
    if (traitCount === 0) {
      categories = this.partOptions as PartCategory[];
    } else if (traitCount === 1) {
      const traitName = Object.keys(this.traitOptions)[0];
      const traitValue = this.dataManager.getData().traits![traitName];
      categories = (this.partOptions as any)[traitValue];
    } else if (traitCount === 2) {
      const traitNames = Object.keys(this.traitOptions);
      const traitValue1 = this.dataManager.getData().traits![traitNames[0]];
      const traitValue2 = this.dataManager.getData().traits![traitNames[1]];
      categories = (this.partOptions as any)[traitValue1][traitValue2];
    } else {
      throw new Error("Unsupported trait count");
    }

    for (const category of categories) {
      const partList = new PartList(
        this.dataManager,
        category.name,
        category.parts.map((part) => part.name),
      );

      const partAccordionItem = new AccordionItem({
        label: StringUtils.capitalize(category.name),
        open: true,
      }, partList);
      this.partAccordionItems.push(partAccordionItem);

      this.accordion.append(partAccordionItem);
    }
  }
}
