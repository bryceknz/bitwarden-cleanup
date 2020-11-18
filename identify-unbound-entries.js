// Import Bitwarden data export from JSON file
const items = require('./bitwarden_export.json').items

// Bitwarden codes login entries with a type value of 1
const LOGIN_TYPE_ID = 1

// Look for entries without a URI entry to match
const unboundEntries = items
  .filter((item) => item.type === LOGIN_TYPE_ID) // Remove non-login entries
  .filter((item) => !item.login.hasOwnProperty('uris')) // Remove entries without a uri to match
  .map(({ name, login }) => ({
    // Remove non-critical information
    name: name,
    login: login.username,
  }))

// Output pretty table of unbound entries
console.table(unboundEntries)
