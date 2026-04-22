const { log } = require("node:console");

let statusCheck = "Active";

let msgStatus = statusCheck === "Active" ? "User is Active"
                : statusCheck === "inActive" ? "User is inActive"
                : statusCheck === "Banned" ? "User is Banned"
                : "unknown status";

console.log(msgStatus);
