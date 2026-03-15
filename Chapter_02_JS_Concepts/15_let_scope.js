let myName = "John Doe";
if (true) {
    console.log(myName); // local variable //enters TDZ
    let myName = "Jane Doe";
    console.log(myName); // local variable
}