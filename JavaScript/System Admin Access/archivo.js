const account = "regular";
let accountStatus = "active";
const pAdmin = 1;
const isAdmin = account === "admin" || pAdmin === 1;
const isValid = accountStatus !== "inactive";
console.log("Admin: " + isAdmin);
console.log("Valid: " + isValid);