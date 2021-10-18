export function getObstacleEvents() {
    const randNum: Number = Math.random();
    if(randNum >= .6) {
        console.log('ObstacleLeft');
    } else if(.6 > randNum && randNum >= .3) {
        console.log('ObstacleCenter');
    } else {
        console.log('ObstacleRight')
    }
    // return {
    //     'ObstacleLeft': coinFlip,
    //     'ObstacleRight': !coinFlip,
    //     'ObstactleCenter': 
    // };
}