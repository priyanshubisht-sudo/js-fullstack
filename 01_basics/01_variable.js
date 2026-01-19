const accountId = 12345
let accountEmail = "priyanshu@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
accountState

// accountID = 5

accountEmail = "thebatman@gotham.com"
accountPassword = "32432"
accountCity = "Gotham"

/*
    Never ever use the fucking var!!
    due to block scope and functional scope issue.
*/

console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountState])

