export interface ImageInfo {
    path: string;
    order: number;
}
interface PartCondition {
    trait: string;
    values: string[];
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
type PartOptions = {
    [partName: string]: PartCategory[];
} | {
    [traitName: string]: {
        [partName: string]: PartCategory[];
    };
} | {
    [trait1Name: string]: {
        [trait2Name: string]: {
            [partName: string]: PartCategory[];
        };
    };
};
export default PartOptions;
//# sourceMappingURL=Part.d.ts.map