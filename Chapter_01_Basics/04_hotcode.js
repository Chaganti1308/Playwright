console.log("Hote code");

// function runs for 10000
function add(a, b) {
    return a + b;
}

for (let i = 0; i < 100000; i++) {
    // function call
    console.log(add(i, i + 1));
}

