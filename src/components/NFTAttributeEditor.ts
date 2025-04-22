import { DomNode } from "@commonmodule/app";
import { Accordion, AccordionItem } from "@commonmodule/app-components";
import { StringUtils } from "@commonmodule/ts";
import { SpritesheetData } from "@gaiaengine/dom";
import KeyToFrame from "../data/KeyToFrame.js";
import NFTData from "../data/NFTData.js";
import PartOptions, { PartCategory } from "../data/PartOptions.js";
import { default as OptionList } from "./OptionList.js";
import OptionListItem from "./OptionListItem.js";

export default class NFTAttributeEditor extends DomNode<HTMLDivElement, {
  dataChanged: (data: NFTData) => void;
}> {
  private baseData: NFTData;

  private accordion: Accordion;
  private traitAccordionItems: AccordionItem[] = [];
  private partAccordionItems: AccordionItem[] = [];

  constructor(
    private options: {
      traitOptions?: { [traitName: string]: string[] };
      partOptions: PartOptions;
      baseData: NFTData;
      keyToFrame: KeyToFrame;
      spritesheet: SpritesheetData;
      spritesheetImagePath: string;
    },
  ) {
    super(".nft-attribute-editor");

    this.baseData = this.options.baseData;
    this.accordion = new Accordion().appendTo(this);

    this.createTraitOptionLists();
    this.createPartOptionLists();
  }

  private cloneData(): NFTData {
    return this.baseData.traits
      ? {
        traits: { ...this.baseData.traits },
        parts: { ...this.baseData.parts },
      }
      : { parts: { ...this.baseData.parts } };
  }

  private getPartCategoriesAndFrames(
    traits?: { [traitName: string]: string },
  ): {
    categories: PartCategory[];
    keyToFrame: { [key: string]: string };
  } {
    let categories: PartCategory[];
    let keyToFrame: { [key: string]: string };

    const traitCount = traits ? Object.keys(traits).length : 0;
    if (traitCount === 0) {
      categories = this.options.partOptions as any;
      keyToFrame = this.options.keyToFrame as any;
    } else if (traitCount === 1) {
      const traitName = Object.keys(traits!)[0];
      const trait = traits![traitName];
      categories = (this.options.partOptions as any)[trait];
      keyToFrame = (this.options.keyToFrame as any)[trait];
    } else if (traitCount === 2) {
      const traitNames = Object.keys(traits!);
      const trait1 = traits![traitNames[0]];
      const trait2 = traits![traitNames[1]];
      categories = (this.options.partOptions as any)[trait1][trait2];
      keyToFrame = (this.options.keyToFrame as any)[trait1][trait2];
    } else {
      throw new Error("Unsupported trait count");
    }

    return { categories, keyToFrame };
  }

  private cleanData(data: NFTData) {
    const { categories } = this.getPartCategoriesAndFrames(data.traits);
    for (const category of categories) {
      let found = false;
      for (const part of category.parts) {
        if (part.condition) {
          const condition = part.condition;
          const conditionValue = data.parts[condition.part];
          if (!conditionValue || !condition.values.includes(conditionValue)) {
            continue;
          }
        }
        found = true;
        break;
      }
      if (!found) delete data.parts[category.name];
    }
  }

  private createTraitOptionLists() {
    for (const traitAccordionItem of this.traitAccordionItems) {
      traitAccordionItem.remove();
    }
    this.traitAccordionItems = [];

    if (!this.options.traitOptions) return;

    for (
      const [traitName, values] of Object.entries(this.options.traitOptions)
    ) {
      const traitOptionList = new OptionList();
      traitOptionList.on("select", (selectedData) => {
        this.baseData = selectedData;
        this.createTraitOptionLists();
        this.createPartOptionLists();
        this.emit("dataChanged", this.baseData);
      });

      this.traitAccordionItems.push(new AccordionItem({
        label: StringUtils.capitalize(traitName),
        open: true,
      }, traitOptionList).appendTo(this.accordion));

      for (const value of values) {
        const data = this.cloneData();
        data.traits = { ...data.traits, [traitName]: value };
        this.cleanData(data);

        const { categories, keyToFrame } = this.getPartCategoriesAndFrames(
          data.traits,
        );
        const defaultParts: { [partName: string]: string } = {};
        for (const category of categories) {
          if (category.parts.length > 0) {
            defaultParts[category.name] = category.parts[0].name;
          }
        }
        data.parts = defaultParts;

        const item = new OptionListItem(
          categories,
          keyToFrame,
          data,
          value,
          this.options.spritesheet,
          this.options.spritesheetImagePath,
        );
        traitOptionList.addItem(item);

        if (this.baseData.traits?.[traitName] === value) {
          item.select();
          traitOptionList.selectedItem = item;
        }
      }
    }
  }

  private createPartOptionLists() {
    for (const partAccordionItem of this.partAccordionItems) {
      partAccordionItem.remove();
    }
    this.partAccordionItems = [];

    const { categories, keyToFrame } = this.getPartCategoriesAndFrames(
      this.baseData.traits,
    );
    for (const category of categories) {
      const partOptionList = new OptionList();
      partOptionList.on("select", (selectedData) => {
        this.baseData = selectedData;
        this.createPartOptionLists();
        this.emit("dataChanged", this.baseData);
      });

      this.partAccordionItems.push(new AccordionItem({
        label: StringUtils.capitalize(category.name),
        open: true,
      }, partOptionList).appendTo(this.accordion));

      for (const part of category.parts) {
        if (part.condition) {
          const condition = part.condition;
          const conditionValue = this.baseData.parts[condition.part];
          if (!conditionValue || !condition.values.includes(conditionValue)) {
            continue;
          }
        }

        const data = this.cloneData();
        data.parts[category.name] = part.name;
        this.cleanData(data);

        const item = new OptionListItem(
          categories,
          keyToFrame,
          data,
          part.name,
          this.options.spritesheet,
          this.options.spritesheetImagePath,
        );
        partOptionList.addItem(item);

        if (this.baseData.parts[category.name] === part.name) {
          item.select();
          partOptionList.selectedItem = item;
        }
      }
    }
  }
}
