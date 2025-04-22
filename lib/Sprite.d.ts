interface SpriteInfo {
    frame: string;
    zIndex: number;
}
type KeyToSprite = {
    [key: string]: SpriteInfo;
} | {
    [trait1Name: string]: {
        [key: string]: SpriteInfo;
    };
} | {
    [trait1Name: string]: {
        [trait2Name: string]: {
            [key: string]: SpriteInfo;
        };
    };
};
//# sourceMappingURL=Sprite.d.ts.map