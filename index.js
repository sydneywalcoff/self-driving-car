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
            return console.log('The car is off');
        }
        return;
    }
}
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute('turn ' + direction);
    }
}
// execution
const steering = new SteeringControl();
steering.turn('right');
const autonomousCar = new Car({ isRunning: false });
autonomousCar.respond(computer_vision_1.getObstacleEvents());
