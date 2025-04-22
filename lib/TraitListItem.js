import { DomNode, el } from "@commonmodule/app";
import TraitOrPartPreview from "./TraitOrPartPreview.js";
export default class TraitListItem extends DomNode {
    checkIconContainer;
    constructor(dataManager, traitName, value) {
        super("a.trait-list-item");
        const dataClone = dataManager.getDataClone();
        dataClone.traits[traitName] = value;
        const traitCount = Object.keys(dataClone.traits).length;
        let categories;
        if (traitCount === 1) {
            const traitName = Object.keys(dataClone.traits)[0];
            const trait = dataClone.traits[traitName];
            categories = dataManager.getPartCategories(trait);
        }
        else if (traitCount === 2) {
            const traitNames = Object.keys(dataClone.traits);
            const trait1 = dataClone.traits[traitNames[0]];
            const trait2 = dataClone.traits[traitNames[1]];
            categories = dataManager.getPartCategories(trait1, trait2);
        }
        else {
            throw new Error("Unsupported trait count");
        }
        const defaultParts = {};
        for (const category of categories) {
            if (category.parts.length > 0) {
                defaultParts[category.name] = category.parts[0].name;
            }
        }
        dataClone.parts = defaultParts;
        this.append(new TraitOrPartPreview(dataManager, dataClone), el(".value", value), this.checkIconContainer = el(".check-icon-container"));
    }
}
//# sourceMappingURL=TraitListItem.js.map