import { DomNode } from "@commonmodule/app";
import { GameScreen, Sprite } from "@gaiaengine/dom";
export default class TraitOrPartPreview extends DomNode {
    gameScreen;
    constructor(dataManager, data) {
        super(".trait-or-part-preview");
        this.append(this.gameScreen = new GameScreen(128, 128));
        const traitCount = data.traits ? Object.keys(data.traits).length : 0;
        let categories;
        let frames;
        if (traitCount === 0) {
            categories = dataManager.getPartCategories();
            frames = dataManager.getKeyToSprite();
        }
        else if (traitCount === 1) {
            const traitName = Object.keys(data.traits)[0];
            const trait = data.traits[traitName];
            categories = dataManager.getPartCategories(trait);
            frames = dataManager.getKeyToSprite()[trait];
        }
        else if (traitCount === 2) {
            const traitNames = Object.keys(data.traits);
            const trait1 = data.traits[traitNames[0]];
            const trait2 = data.traits[traitNames[1]];
            categories = dataManager.getPartCategories(trait1, trait2);
            frames = dataManager.getKeyToSprite()[trait1][trait2];
        }
        else {
            throw new Error("Unsupported trait count");
        }
        for (const [partName, partValue] of Object.entries(data.parts)) {
            const category = categories.find((cat) => cat.name === partName);
            if (category) {
                const part = category.parts.find((p) => p.name === partValue);
                if (part?.images) {
                    for (const image of part.images) {
                        const frame = frames[image.path];
                        const sprite = new Sprite(0, 0, dataManager.getSpritesheetImagePath(), dataManager.getSpritesheet(), frame).appendTo(this.gameScreen.root);
                        sprite.zIndex = image.zIndex;
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=TraitOrPartPreview.js.map