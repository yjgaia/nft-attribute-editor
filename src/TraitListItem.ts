import { DomNode, el } from "@commonmodule/app";
import { GameScreen, Sprite } from "@gaiaengine/dom";
import FrameInfo from "./FrameInfo.js";
import NFTDataManager from "./NFTDataManager.js";

export default class TraitListItem extends DomNode {
  private gameScreen: GameScreen;
  private checkIconContainer: DomNode;

  constructor(dataManager: NFTDataManager, traitName: string, value: string) {
    super("a.trait-list-item");

    this.append(
      this.gameScreen = new GameScreen(128, 128),
      el(".value", value),
      this.checkIconContainer = el(".check-icon-container"),
    );

    const dataClone = dataManager.getDataClone();
    dataClone.traits![traitName] = value;

    const traitCount = dataClone.traits
      ? Object.keys(dataClone.traits).length
      : 0;

    let frameInfos: { [key: string]: FrameInfo };
    if (traitCount === 0) {
      frameInfos = dataManager.getKeyToSprite() as any;
    } else if (traitCount === 1) {
      const traitName = Object.keys(dataClone.traits!)[0];
      const trait = dataManager.getTraitValue(traitName)!;
      frameInfos = dataManager.getKeyToSprite()[trait] as any;
    } else if (traitCount === 2) {
      const traitNames = Object.keys(dataClone.traits!);
      const trait1 = dataManager.getTraitValue(traitNames[0])!;
      const trait2 = dataManager.getTraitValue(traitNames[1])!;
      frameInfos = (dataManager.getKeyToSprite()[trait1] as any)[trait2];
    } else {
      throw new Error("Unsupported trait count");
    }

    console.log(frameInfos);

    /*const selectedParts = PartSelector.getSelectedParts(metadata);
    for (const part of Object.values(selectedParts)) {
      const images = part.images;
      if (images) {
        for (const image of images) {
          const data = (keyToSprite as any)[metadata.type.toLocaleLowerCase()][
            image.path
          ];

          const sprite = new Sprite(
            0,
            0,
            dataManager.getSpritesheetImagePath(),
            dataManager.getSpritesheet(),
            data.frame,
          ).appendTo(this.gameScreen.root);

          sprite.zIndex = data.zIndex;
        }
      }
    }*/

    //this.on("visible", () => this.updateGameScreenSize());
    //this.onWindow("resize", () => this.updateGameScreenSize());
  }
}
