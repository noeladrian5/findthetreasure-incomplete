function moveForward(x, y, direction) {  
    console.log("moving forward"); 
    switch (direction) {
        case 'North': {
            y = y + 1;
            console.log("moving",x , y);
            return {x,y, direction};
        }
        case 'South': {
            y = y - 1;
            console.log("moving",x , y);
            return {x,y, direction};
        }
        case 'East': {
            x = x + 1;
            console.log("moving",x , y);
            return {x,y, direction};
        }
        case 'West': {
            x = x - 1;
            console.log("moving",x , y);
            return {x,y, direction};
        }
    }
    console.log("moving",x , y);
}

function turnRight(x, y, direction) {
    switch (direction) {
        case 'North': {
            const newDirection = 'East';
            return { position: [x,y], direction: newDirection};
        }
        case 'South': {
            const newDirection = 'West';
            return { position: [x,y], direction: newDirection};
        }
        case 'East': {
            const newDirection = 'South';
            return { position: [x,y], direction: newDirection};
        }
        case 'West': {
            const newDirection = 'North';
            return { position: [x,y], direction: newDirection};
        }
    }

    return { position: [x, y], direction: direction }
}

function turnLeft(x, y, direction) {
    switch (direction) {
        case 'North': {
            const newDirection = 'West';
            return {x,y, direction};
        }
        case 'South': {
            const newDirection = 'East';
            return {x,y, direction};
        }
        case 'East': {
            const newDirection = 'North';
            return {x,y, direction};
        }
        case 'West': {
            const newDirection = 'South';
            return {x,y, direction};
        }
    }
}

function findTheTreasure(startingPosition, direction, instructions) {
    let x = startingPosition[0];
    let y = startingPosition[1];
    instructions.forEach(element => {
        switch (element) {
            case 'Forward': {
                moveForward(x, y, direction);      
                return {x,y, direction};         
            }
            case 'Right': {
                turnRight(x, y, direction);
                break;
            }
            case 'Left': {
                turnLeft(x, y, direction);
                break;
            }
        }
    });
    console.log("I am starting at", x, y, " and facing", direction)
    turnRight(x, y, direction, instructions)
    console.log("I am starting at", x, y, " and facing", direction)
}

// CTRL+D on Windows is multi select


// SHIFT+CTRIL+ALT on windows can select multiple lines

module.exports = {
    moveForward,
    turnLeft,
    turnRight,
    findTheTreasure
}