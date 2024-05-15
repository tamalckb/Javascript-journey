const accountId = 14365
let accountEmail = "tamal@youtube.com"
var accountPassword = "12344556"
accountCity = "Feni"
let accountState

// accountId = 3  //not allowed

accountEmail = "tc@hotmail.com"
accountPassword = "123455"
accountCity = "Dhaka"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//If we declare a varible in javascript without assigning a value then
//the value will be undefined till we assign value to it