import {Student} from "./Student";

export class BTVN {
    arr1: Student[] = [];
    arr2: Student[] = [];
    arr3: Student[] = [];
    arr: Student[] = [];

    constructor() {
    }

    add(student: Student): void {
        this.arr.push(student);
    }

    count(): string {
        for (let i = 0; i < this.arr.length; i++) {
            let avg: number = ((this.arr[i].getScoreLite() + this.arr[i].getScoreMath() + this.arr[i].getScoreEL()) / 3);
            if (avg >= 8) {
                this.arr1.push(this.arr[i]);
            } else if (avg >= 6) {
                this.arr2.push(this.arr[i]);
            } else {
                this.arr3.push(this.arr[i]);
            }
        }

        return `arr1:${this.arr1.length}, arr2:${this.arr2.length}, arr3:${this.arr3.length}`;
    }
}