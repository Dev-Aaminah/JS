const accountId = 144553
let accountEmail = "abc123@gmail.com"
var accountPassword = "12345"
accountCity = "Rawalpindi"
let accountState;

// accountId = 2
// console.log(accountId);
// console.log("Hey")

accountEmail ="abc@gmail.com"
accountPassword="54321"
accountCity="Karachi"

/*
Prefer not to use var, because of issue in block scope and functional scope.
*/

console.table([ accountEmail, accountPassword, accountCity , accountState])