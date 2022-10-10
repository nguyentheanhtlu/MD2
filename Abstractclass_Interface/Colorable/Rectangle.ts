import {Shape} from "./Shape";
import {Square} from "./Square";

export class Rectangle extends Shape implements Square{
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }

    howToColor(): string {
        return "Color all four sides";
    }
}
