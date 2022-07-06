function moveForward(startingPosition, direction) {  
    console.log("moving forward"); 
    switch (direction) {
        case 'North': {
            startingPosition = [startingPosition[0], startingPosition[1] + 1]
            return {startingPosition};
        }
        case 'South': {
            startingPosition = [startingPosition[0], startingPosition[1] - 1]
            return {startingPosition};
        }
        case 'East': {
            startingPosition = [startingPosition[0] + 1, startingPosition[1] ]
            return {startingPosition};
        }
        case 'West': {
            startingPosition = [startingPosition[0] - 1, startingPosition[1] ]
            return {startingPosition};
        }
    }
}

function turnRight( direction) {
    switch (direction) {
        case 'North': {
            const newDirection = 'East';
            return {newDirection};
        }
        case 'South': {
            const newDirection = 'West';
            return {newDirection};
        }
        case 'East': {
            const newDirection = 'South';
            return {newDirection};
        }
        case 'West': {
            const newDirection = 'North';
            return {newDirection};
        }
    }

}

function turnLeft( direction) {
    switch (direction) {
        case 'North': {
            const newDirection = 'West';
            return {newDirection};
        }
        case 'South': {
            const newDirection = 'East';
            return {newDirection};
        }
        case 'East': {
            const newDirection = 'North';
            return {newDirection};
        }
        case 'West': {
            const newDirection = 'South';
            return {newDirection};
        }
    }
}

function findTheTreasure(startingPosition, direction, instructions) {
    instructions.forEach(element => {
        switch (element) {
            case 'Forward': {
                startingPosition = moveForward(startingPosition, direction);      
                return {startingPosition};        
            }
            case 'Right': {
                direction = turnRight(direction);
                return {direction};
            }
            case 'Left': {
                direction = turnLeft(direction);
                return {direction};
            }
        }
    });
    console.log("I am starting at", startingPosition, " and facing", direction)
    turnRight(startingPosition, direction, instructions)
}
// CTRL+D on Windows is multi select


// SHIFT+CTRIL+ALT on windows can select multiple lines

module.exports = {
    moveForward,
    turnLeft,
    turnRight,
    findTheTreasure
}