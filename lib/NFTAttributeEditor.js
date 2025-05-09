import { DomNode } from "@commonmodule/app";
import { Accordion, AccordionItem } from "@commonmodule/app-components";
import { StringUtils } from "@commonmodule/ts";
import NFTDataManager from "./NFTDataManager.js";
import PartList from "./PartList.js";
import TraitList from "./TraitList.js";
export default class NFTAttributeEditor extends DomNode {
    traitOptions;
    partOptions;
    dataManager;
    accordion;
    partAccordionItems = [];
    constructor(options) {
        super(".nft-attribute-editor");
        this.traitOptions = options.options.traits || {};
        this.partOptions = options.options.parts;
        this.dataManager = new NFTDataManager(options);
        this.accordion = new Accordion().appendTo(this);
        for (const [traitName, values] of Object.entries(options.options.traits || {})) {
            const traitList = new TraitList(this.dataManager, traitName, values);
            traitList.on("select", (selectedTrait) => {
                this.dataManager.getData().traits[traitName] = selectedTrait;
                this.emit("dataChanged", this.dataManager.getData());
            });
            this.accordion.append(new AccordionItem({
                label: StringUtils.capitalize(traitName),
                open: true,
            }, traitList));
        }
        this.createPartList();
    }
    async createPartList() {
        for (const partAccordionItem of this.partAccordionItems) {
            partAccordionItem.remove();
        }
        this.partAccordionItems = [];
        let categories = [];
        const traitCount = Object.keys(this.traitOptions).length;
        if (traitCount === 0) {
            categories = this.partOptions;
        }
        else if (traitCount === 1) {
            const traitName = Object.keys(this.traitOptions)[0];
            const traitValue = this.dataManager.getData().traits[traitName];
            categories = this.partOptions[traitValue];
        }
        else if (traitCount === 2) {
            const traitNames = Object.keys(this.traitOptions);
            const traitValue1 = this.dataManager.getData().traits[traitNames[0]];
            const traitValue2 = this.dataManager.getData().traits[traitNames[1]];
            categories = this.partOptions[traitValue1][traitValue2];
        }
        else {
            throw new Error("Unsupported trait count");
        }
        for (const category of categories) {
            const partList = new PartList(this.dataManager, category.name, category.parts.map((part) => part.name));
            partList.on("select", (selectedPart) => {
                this.dataManager.getData().parts[category.name] = selectedPart;
                this.emit("dataChanged", this.dataManager.getData());
            });
            const partAccordionItem = new AccordionItem({
                label: StringUtils.capitalize(category.name),
                open: true,
            }, partList);
            this.partAccordionItems.push(partAccordionItem);
            this.accordion.append(partAccordionItem);
        }
    }
}
//# sourceMappingURL=NFTAttributeEditor.js.map