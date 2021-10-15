import { getObstacleEvents } from "./computer-vision";

// types
interface AutonomousCar {
    isRunning?: boolean;
    respond: (events: Events) => void;
}

interface AutonomousCarProps {
    isRunning?: boolean;
    steeringControl: Steering;
}

interface Events {
   [i: string] : boolean
}

interface Control {
    execute: (command: string) => void;
}

interface Steering extends Control {
    turn: (direction: string) => void;
}

// classes
class Car implements AutonomousCar {
    isRunning;
    steeringControl;
    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events:Events) {
        if(!this.isRunning) {
            return console.log('The car is off');
        }
        Object.keys(events).forEach(eventKey => {
            if(!eventKey) {
                return;
            }
            if(events[eventKey] && eventKey ==='ObstacleLeft') {
                this.steeringControl.turn('right');
            }
            if(events[eventKey] && eventKey ==='ObstacleRight') {
                this.steeringControl.turn('left');
            }
        } )
    }
}

class SteeringControl implements Steering {
    execute(command:string) {
        console.log(`Executing: ${command}`)
    }
    turn(direction: string) {
        this.execute('turn '+ direction)
    }
}

// execution
const steering = new SteeringControl();
const autonomousCar = new Car({isRunning: true, steeringControl: steering});
// console.log(getObstacleEvents())
autonomousCar.respond(getObstacleEvents());