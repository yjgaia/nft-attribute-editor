import { DomNode } from "@commonmodule/app";
import { GameScreen, Sprite } from "@gaiaengine/dom";
export default class OptionPreview extends DomNode {
    gameScreen;
    constructor(categories, keyToFrame, data, spritesheet, spritesheetImagePath) {
        super(".option-preview");
        this.append(this.gameScreen = new GameScreen(128, 128));
        for (const [partName, partValue] of Object.entries(data.parts)) {
            const category = categories.find((cat) => cat.name === partName);
            if (category) {
                const part = category.parts.find((p) => p.name === partValue);
                if (part?.images) {
                    for (const image of part.images) {
                        const frame = keyToFrame[image.path];
                        if (!frame)
                            continue;
                        const sprite = new Sprite(0, 0, spritesheetImagePath, spritesheet, frame).appendTo(this.gameScreen.root);
                        sprite.drawingOrder = image.drawingOrder;
                    }
                }
            }
        }
        this.on("visible", () => this.updateGameScreenSize());
        this.onWindow("resize", () => this.updateGameScreenSize());
    }
    updateGameScreenSize() {
        const rect = this.calculateRect();
        const widthRatio = rect.width / 128;
        const heightRatio = rect.width / 128;
        const ratio = Math.min(widthRatio, heightRatio);
        this.gameScreen.resize(128, 128, ratio);
    }
}
//# sourceMappingURL=OptionPreview.js.map