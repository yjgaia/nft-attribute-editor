import { DomNode, el } from "@commonmodule/app";
import { GameScreen } from "@gaiaengine/dom";
export default class TraitListItem extends DomNode {
    gameScreen;
    checkIconContainer;
    constructor(dataManager, traitName, value) {
        super("a.trait-list-item");
        this.append(this.gameScreen = new GameScreen(128, 128), el(".value", value), this.checkIconContainer = el(".check-icon-container"));
        const dataClone = dataManager.getDataClone();
        dataClone.traits[traitName] = value;
        const traitCount = dataClone.traits
            ? Object.keys(dataClone.traits).length
            : 0;
        let frameInfos;
        if (traitCount === 0) {
            frameInfos = dataManager.getKeyToSprite();
        }
        else if (traitCount === 1) {
            const traitName = Object.keys(dataClone.traits)[0];
            const trait = dataManager.getTraitValue(traitName);
            frameInfos = dataManager.getKeyToSprite()[trait];
        }
        else if (traitCount === 2) {
            const traitNames = Object.keys(dataClone.traits);
            const trait1 = dataManager.getTraitValue(traitNames[0]);
            const trait2 = dataManager.getTraitValue(traitNames[1]);
            frameInfos = dataManager.getKeyToSprite()[trait1][trait2];
        }
        else {
            throw new Error("Unsupported trait count");
        }
        console.log(frameInfos);
    }
}
//# sourceMappingURL=TraitListItem.js.map