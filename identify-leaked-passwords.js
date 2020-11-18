// Import Bitwarden data export from JSON file
const items = require('./bitwarden_export.json').items
// Import list of leaked passwords to check
const leakedPasswords = require('./leaked_password_list.json')

// Bitwarden codes login entries with a type value of 1
const LOGIN_TYPE_ID = 1

// Look for entries containing a leaked password
const loginsToUpdate = items
  .filter((item) => item.type === LOGIN_TYPE_ID) // Remove non-login entries
  .filter((item) => item.login.password) // Remove entries with null/undefined/empty string passwords
  .map(({ name, login }) => ({
    // Remove non-critical information
    name: name,
    login: login.username,
    password: login.password,
  }))
  .filter((login) => checkForLeak(login.password))

// Check if given password exists in list of leaked passwords
function checkForLeak(password) {
  return leakedPasswords.some((leakedPassword) =>
    password.toLowerCase().includes(leakedPassword)
  )
}

// Output pretty table of leaked entries
console.table(loginsToUpdate)
