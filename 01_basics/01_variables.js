const accountId = 144553
let accountEmail = "saransh@google.com"
var accountPassword = "12345"
accountCity = "Dehradun"
let accountState;

// accountId = 2  // not allowed


accountEmail = "sm@sm.com"
accountPassword = "2121212"
accountCity = "Bengaluru"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
