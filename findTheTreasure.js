function moveForward(x, y, direction) {
    return { 
        position: [x, y],
        direction: onTurnRight[direction] ?? direction
    }
}

const onMoveForward = {
    //todo
}

const onTurnRight = {
    'North': 'East',
    'South': 'West',
    'East' : 'South',
    'West' : 'North',
}

const onTurnLeft = {
    'North': 'West',
    'South': 'East',
    'West' : 'South',
    'East' : 'North',
}

function turnRight(x, y, direction) {
    return { 
        position: [x, y],
        direction: onTurnRight[direction] ?? direction
    }
}

function turnLeft(x, y, direction) {
    return { 
        position: [x, y],
        direction: onTurnRight[direction] ?? direction
    }
}

function findTheTreasure(startingPosition, direction, instructions) {
    //TODO implement
}

// CTRL+D on Windows is multi select


// SHIFT+CTRIL+ALT on windows can select multiple lines

module.exports = {
    moveForward,
    turnLeft,
    turnRight,
    findTheTreasure
}