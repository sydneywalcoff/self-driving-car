"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
// classes
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        if (!this.isRunning) {
            return console.log('The car is off');
        }
        Object.keys(events).forEach(eventKey => {
            if (!eventKey) {
                return;
            }
            if (events[eventKey] && eventKey === 'ObstacleLeft') {
                this.steeringControl.turn('right');
            }
            if (events[eventKey] && eventKey === 'ObstacleRight') {
                this.steeringControl.turn('left');
            }
        });
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
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
// console.log(getObstacleEvents())
autonomousCar.respond(computer_vision_1.getObstacleEvents());
