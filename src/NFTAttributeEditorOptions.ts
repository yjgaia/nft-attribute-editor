import { SpritesheetData } from "@gaiaengine/dom";
import KeyToFrame from "./KeyToFrame.js";
import NFTData from "./NFTData.js";
import PartOptions from "./PartOptions.js";

export default interface NFTAttributeEditorOptions {
  options: {
    traits?: { [traitName: string]: string[] };
    parts: PartOptions;
  };
  data: NFTData;
  keyToFrame: KeyToFrame;
  spritesheet: SpritesheetData;
  spritesheetImagePath: string;
}
