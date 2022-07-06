
function A(x,y) {
    return x + y;
}

const a = (x, y) => x + y;

function B(x) {
    return x + 1;
}

const b = x => x + 1;

// count how many times it was called.
function C() {
    if(!this.callCount) {
        this.callCount = 0;
    }

    this.callCount += 1;

    return this.callCount;
}

function C2() {
    this.callCount = (this.callCount || 0) +1;
    return callCount;
}

console.log(C2())

function D(x, y) {
    const num = x+y;
    console.log(num);
    return num;
}

const d = (x, y) => {
    const num = x+y;
    console.log(num);
    return num;
}