type KeyToFrame = {
    [key: string]: string;
} | {
    [trait: string]: {
        [key: string]: string;
    };
} | {
    [trait1: string]: {
        [trait2: string]: {
            [key: string]: string;
        };
    };
};
export default KeyToFrame;
//# sourceMappingURL=KeyToFrame.d.ts.map