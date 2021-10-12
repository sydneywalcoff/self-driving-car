"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// classes
class Car {
    constructor(props) {
        this.isRunning = props;
    }
}
// execution
const autonomousCar = new Car({ isRunning: true });
console.log(autonomousCar.isRunning);
