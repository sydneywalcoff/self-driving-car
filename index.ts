import { getObstacleEvents } from "./computer-vision";

// types
interface AutonomousCar {
    isRunning?: boolean;
}

interface AutonomousCarProps {
    isRunning?: boolean;
}

// classes
class Car implements AutonomousCar {
    isRunning;
    constructor(props: AutonomousCarProps) {
        this.isRunning = props
    }
}

// execution
const autonomousCar = new Car({isRunning: true});
console.log(autonomousCar.isRunning);