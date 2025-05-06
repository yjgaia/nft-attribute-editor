import { DomNode } from "@commonmodule/app";
import { Accordion, AccordionItem } from "@commonmodule/app-components";
import { StringUtils } from "@commonmodule/ts";
import { default as OptionList } from "./OptionList.js";
import OptionListItem from "./OptionListItem.js";
export default class NFTAttributeEditor extends DomNode {
    options;
    data;
    savedScrollTop = 0;
    accordion;
    traitAccordionItems = [];
    partAccordionItems = [];
    constructor(options) {
        super(".nft-attribute-editor");
        this.options = options;
        this.data = this.options.baseData;
        this.accordion = new Accordion().appendTo(this);
        this.saveScrollTop();
        this.createTraitOptionLists();
        this.createPartOptionLists();
        this.restoreScrollTop();
    }
    saveScrollTop() {
        this.savedScrollTop = this.htmlElement.scrollTop;
    }
    restoreScrollTop() {
        this.htmlElement.scrollTop = this.savedScrollTop;
    }
    cloneData() {
        return this.data.traits
            ? {
                traits: { ...this.data.traits },
                parts: { ...this.data.parts },
            }
            : { parts: { ...this.data.parts } };
    }
    getPartCategoriesAndFrames(traits) {
        let categories;
        let keyToFrame;
        const traitCount = traits ? Object.keys(traits).length : 0;
        if (traitCount === 0) {
            categories = this.options.partOptions;
            keyToFrame = this.options.keyToFrame;
        }
        else if (traitCount === 1) {
            const traitName = Object.keys(traits)[0];
            const trait = traits[traitName];
            categories = this.options.partOptions[trait];
            keyToFrame = this.options.keyToFrame[trait];
        }
        else if (traitCount === 2) {
            const traitNames = Object.keys(traits);
            const trait1 = traits[traitNames[0]];
            const trait2 = traits[traitNames[1]];
            categories = this.options.partOptions[trait1][trait2];
            keyToFrame = this.options.keyToFrame[trait1][trait2];
        }
        else {
            throw new Error("Unsupported trait count");
        }
        return { categories, keyToFrame };
    }
    cleanData(data) {
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
            if (!found)
                delete data.parts[category.name];
        }
    }
    createTraitOptionLists() {
        for (const traitAccordionItem of this.traitAccordionItems) {
            traitAccordionItem.remove();
        }
        this.traitAccordionItems = [];
        if (!this.options.traitOptions)
            return;
        for (const [traitName, values] of Object.entries(this.options.traitOptions)) {
            const traitOptionList = new OptionList();
            traitOptionList.on("select", (selectedData) => {
                this.data = selectedData;
                this.saveScrollTop();
                this.createTraitOptionLists();
                this.createPartOptionLists();
                this.restoreScrollTop();
                this.emit("dataChanged", this.data);
            });
            this.traitAccordionItems.push(new AccordionItem({
                label: StringUtils.capitalize(traitName),
                open: true,
            }, traitOptionList).appendTo(this.accordion));
            for (const value of values) {
                const data = this.cloneData();
                data.traits = { ...data.traits, [traitName]: value };
                this.cleanData(data);
                const { categories, keyToFrame } = this.getPartCategoriesAndFrames(data.traits);
                const defaultParts = {};
                for (const category of categories) {
                    if (category.parts.length > 0) {
                        defaultParts[category.name] = category.parts[0].name;
                    }
                }
                data.parts = defaultParts;
                const item = new OptionListItem(categories, keyToFrame, data, value, this.options.spritesheet, this.options.spritesheetImagePath);
                traitOptionList.addItem(item);
                if (this.data.traits?.[traitName] === value) {
                    item.select();
                    traitOptionList.selectedItem = item;
                }
            }
        }
    }
    createPartOptionLists() {
        for (const partAccordionItem of this.partAccordionItems) {
            partAccordionItem.remove();
        }
        this.partAccordionItems = [];
        const { categories, keyToFrame } = this.getPartCategoriesAndFrames(this.data.traits);
        for (const category of categories) {
            const partOptionList = new OptionList();
            partOptionList.on("select", (selectedData) => {
                this.data = selectedData;
                this.saveScrollTop();
                this.createPartOptionLists();
                this.restoreScrollTop();
                this.emit("dataChanged", this.data);
            });
            this.partAccordionItems.push(new AccordionItem({
                label: StringUtils.capitalize(category.name),
                open: true,
            }, partOptionList).appendTo(this.accordion));
            for (const part of category.parts) {
                if (part.condition) {
                    const condition = part.condition;
                    const conditionValue = this.data.parts[condition.part];
                    if (!conditionValue || !condition.values.includes(conditionValue)) {
                        continue;
                    }
                }
                const data = this.cloneData();
                data.parts[category.name] = part.name;
                this.cleanData(data);
                const item = new OptionListItem(categories, keyToFrame, data, part.name, this.options.spritesheet, this.options.spritesheetImagePath);
                partOptionList.addItem(item);
                if (this.data.parts[category.name] === part.name) {
                    item.select();
                    partOptionList.selectedItem = item;
                }
            }
        }
    }
    getData() {
        return this.data;
    }
}
//# sourceMappingURL=NFTAttributeEditor.js.map