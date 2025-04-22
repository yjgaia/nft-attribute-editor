import FrameInfo from "./FrameInfo.js";
type KeyToSprite = {
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
export default KeyToSprite;
//# sourceMappingURL=KeyToSprite.d.ts.map