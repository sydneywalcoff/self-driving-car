"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObstacleEvents = void 0;
function getObstacleEvents() {
    const randNum = Math.random();
    if (randNum >= .6) {
        console.log('ObstacleLeft');
    }
    else if (.6 > randNum && randNum >= .3) {
        console.log('ObstacleCenter');
    }
    else {
        console.log('ObstacleRight');
    }
    // return {
    //     'ObstacleLeft': coinFlip,
    //     'ObstacleRight': !coinFlip,
    //     'ObstactleCenter': 
    // };
}
exports.getObstacleEvents = getObstacleEvents;
