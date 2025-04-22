import { DomNode, el } from "@commonmodule/app";
import { GameScreen } from "@gaiaengine/dom";
export default class TraitListItem extends DomNode {
    gameScreen;
    checkIconContainer;
    constructor(dataManager, value) {
        super("a.trait-list-item");
        this.append(this.gameScreen = new GameScreen(128, 128), el(".value", value), this.checkIconContainer = el(".check-icon-container"));
    }
}
//# sourceMappingURL=TraitListItem.js.map