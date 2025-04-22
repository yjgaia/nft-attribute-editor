import { DomNode } from "@commonmodule/app";
import { GameScreen, Sprite } from "@gaiaengine/dom";
import NFTData from "./NFTData.js";
import NFTDataManager from "./NFTDataManager.js";
import { PartCategory } from "./PartOptions.js";

export default class TraitOrPartPreview extends DomNode {
  private gameScreen: GameScreen;

  constructor(dataManager: NFTDataManager, data: NFTData) {
    super(".trait-or-part-preview");
    this.append(this.gameScreen = new GameScreen(128, 128));

    const traitCount = data.traits ? Object.keys(data.traits).length : 0;

    let categories: PartCategory[];
    let frames: { [key: string]: string };

    if (traitCount === 0) {
      categories = dataManager.getPartCategories();
      frames = dataManager.getKeyToSprite() as any;
    } else if (traitCount === 1) {
      const traitName = Object.keys(data.traits!)[0];
      const trait = data.traits![traitName];
      categories = dataManager.getPartCategories(trait);
      frames = dataManager.getKeyToSprite()[trait] as any;
    } else if (traitCount === 2) {
      const traitNames = Object.keys(data.traits!);
      const trait1 = data.traits![traitNames[0]];
      const trait2 = data.traits![traitNames[1]];
      categories = dataManager.getPartCategories(trait1, trait2);
      frames = (dataManager.getKeyToSprite()[trait1] as any)[trait2];
    } else {
      throw new Error("Unsupported trait count");
    }

    for (const [partName, partValue] of Object.entries(data.parts)) {
      const category = categories.find((cat) => cat.name === partName);
      if (category) {
        const part = category.parts.find((p) => p.name === partValue);
        if (part?.images) {
          if (part.condition) {
            const condition = part.condition;
            const conditionValue = data.traits?.[condition.part] ||
              data.parts[condition.part];
            if (!conditionValue || !condition.values.includes(conditionValue)) {
              continue;
            }
          }

          for (const image of part.images) {
            const frame = frames[image.path];
            const sprite = new Sprite(
              0,
              0,
              dataManager.getSpritesheetImagePath(),
              dataManager.getSpritesheet(),
              frame,
            ).appendTo(this.gameScreen.root);
            sprite.zIndex = image.zIndex;
          }
        }
      }
    }

    this.on("visible", () => this.updateGameScreenSize());
    this.onWindow("resize", () => this.updateGameScreenSize());
  }

  private updateGameScreenSize() {
    const rect = this.calculateRect();

    const widthRatio = rect.width / 128;
    const heightRatio = rect.width / 128;
    const ratio = Math.min(widthRatio, heightRatio);

    this.gameScreen.resize(128, 128, ratio);
  }
}
