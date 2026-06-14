// closure
// Ex 3
function outer(){
    let message = 'Hello';

    function inner(){
        console.log(message);
        
    }
    inner();
}

outer();

// Ex 2
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`count increased to ${count}`);

    }
    function getCount(){
        return count;
    }
    return {increment,getCount};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`);

// EX 3
function createGame() {
    let score = 0;

    function increaseScore(points) {
        score = score + points;
        console.log(`+${points} pts`);

    }

    function decreaseScore(points) {
        score = score - points;
        console.log(`-${points} pts`);

    }

    function getScore() {
        return score;
    }
    return { increaseScore, decreaseScore, getScore }
}

const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()} pts`);
