# Bitwarden Cleanup scripts

## What?
A collection of simple `Node.js` scripts to assist in cleaning up my [Bitwarden](https://bitwarden.com/) content after years of rampant growth, stemming from an initial migration from [KeePass](https://keepass.info/).

Includes scripts for:
* Identifying entries without a URI matcher (`identify-unbound-entries.js`)
* Identifying entries containing passwords that have [leaked](https://haveibeenpwned.com/) (`identify-leaked-passwords.js`)

_Note_: These are merely to assist a manual cleanup - they simply identify entries that require intervention.

## How?
### Setup
1. Export data from Bitwarden to a JSON file named `bitwarden_export.json`
1. Populate `leaked_password_list.json` with an array of strings representing leaked passwords you want to look for

_Note_: It is **critical** that you do not release the contents of either of these files publicly, and delete them from your hard drive after you have finished with these scripts. The data in them is unencrypted and may compromise your security, but you know that already 🔐😊.

### Usage
* Run the following terminal command to identify entries containing passwords you listed as leaked:
  ```console
  node identify-leaked-passwords
  ```
* Run the following terminal command to identify entries without a matching URI specified:
  ```console
  node identify-unbound-entries
  ```

## Future
Possible extension ideas:
* TESTS 🧪
* Check for commonly-used passwords
* Implement matching on similar-looking characters (e.g. `'passw0rd'` would still match `'password'`). This library looks handy!: [leet-speak-converter](https://www.npmjs.com/package/leet-speak-converter)
