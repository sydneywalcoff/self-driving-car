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

// execution
const autonomousCar = new Car({isRunning: false});
autonomousCar.respond(getObstacleEvents());