import { Dom, el } from "@commonmodule/app";
import { Checkbox } from "@commonmodule/app-components";
import { StringUtils } from "@commonmodule/ts";
import OptionPreview from "./OptionPreview.js";
export default class OptionListItem extends Dom {
    data;
    checkbox;
    constructor(categories, keyToFrame, data, value, spritesheet, spritesheetImagePath) {
        super(".option-list-item");
        this.data = data;
        this.append(new OptionPreview(categories, keyToFrame, data, spritesheet, spritesheetImagePath), el(".value", StringUtils.capitalize(value)), this.checkbox = new Checkbox());
    }
    getData() {
        return this.data;
    }
    select() {
        this.checkbox.checked = true;
    }
    deselect() {
        this.checkbox.checked = false;
    }
}
//# sourceMappingURL=OptionListItem.js.map