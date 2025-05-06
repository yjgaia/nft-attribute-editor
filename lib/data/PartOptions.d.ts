export interface ImageInfo {
    path: string;
    drawingOrder: number;
}
interface PartCondition {
    part: string;
    values: (string | number)[];
}
export interface PartItem {
    name: string;
    images?: ImageInfo[];
    percent?: number;
    condition?: PartCondition;
}
export interface PartCategory {
    name: string;
    parts: PartItem[];
}
type PartOptions = PartCategory[] | {
    [traitName: string]: PartCategory[];
} | {
    [trait1Name: string]: {
        [trait2Name: string]: PartCategory[];
    };
};
export default PartOptions;
//# sourceMappingURL=PartOptions.d.ts.map