"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
// classes
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
    }
    respond(events) {
        if (!this.isRunning) {
            return console.log('the car is off');
        }
        return;
    }
}
// execution
const autonomousCar = new Car({ isRunning: false });
autonomousCar.respond(computer_vision_1.getObstacleEvents());
