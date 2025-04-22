import FrameInfo from "./FrameInfo.js";
type KeyToFrame = {
    [key: string]: FrameInfo;
} | {
    [trait: string]: {
        [key: string]: FrameInfo;
    };
} | {
    [trait1: string]: {
        [trait2: string]: {
            [key: string]: FrameInfo;
        };
    };
};
export default KeyToFrame;
//# sourceMappingURL=KeyToSprite.d.ts.map