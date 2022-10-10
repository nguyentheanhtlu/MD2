import {Rectangle} from "./Rectangle";
import {InterfaceColorable} from "./InterfaceColorable";

export class Square extends Rectangle implements InterfaceColorable{
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
    howToColor(): string {
        return 'color all four sides.'
    }
}
