import { DomNode, el } from "@commonmodule/app";
import { GameScreen, Sprite } from "@gaiaengine/dom";
import NFTDataManager from "./NFTDataManager.js";

export default class TraitListItem extends DomNode {
  private gameScreen: GameScreen;
  private checkIconContainer: DomNode;

  constructor(dataManager: NFTDataManager, value: string) {
    super("a.trait-list-item");

    this.append(
      this.gameScreen = new GameScreen(128, 128),
      el(".value", value),
      this.checkIconContainer = el(".check-icon-container"),
    );

    /*const selectedParts = PartSelector.getSelectedParts(metadata);
    for (const part of Object.values(selectedParts)) {
      const images = part.images;
      if (images) {
        for (const image of images) {
          const data =
            (keyToSpritesheet as any)[metadata.type.toLocaleLowerCase()][
              image.path
            ];

          const sprite = new Sprite(
            0,
            0,
            "/images/spritesheet.png",
            spritesheet,
            data.frame,
          ).appendTo(this.gameScreen.root);

          sprite.zIndex = data.zIndex;
        }
      }
    }

    this.on("visible", () => this.updateGameScreenSize());
    this.onWindow("resize", () => this.updateGameScreenSize());*/
  }
}
