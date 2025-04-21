import { DomNode } from "@commonmodule/app";
import PartOptions from "./PartOptions.js";
export default class NFTAttributeEditor extends DomNode {
    constructor(options: {
        options: {
            traits?: {
                [traitName: string]: string[];
            };
            parts: PartOptions;
        };
        data: {
            traits?: {
                [traitName: string]: string;
            };
            parts: {
                [partName: string]: string;
            };
        };
    });
}
//# sourceMappingURL=NFTAttributeEditor.d.ts.map