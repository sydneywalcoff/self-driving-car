import { getObstacleEvents } from "./computer-vision";

// types
interface AutonomousCar {
    isRunning?: boolean;
    respond: (events: Events) => void;
}

interface AutonomousCarProps {
    isRunning?: boolean;
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
    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning
    }
    respond(events:Events) {
        if(!this.isRunning) {
            return console.log('The car is off');
        }
        return
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
steering.turn('right');
const autonomousCar = new Car({isRunning: false});
autonomousCar.respond(getObstacleEvents());