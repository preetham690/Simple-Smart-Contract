// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');

//references to bytecode(which is used to deploy to the main or testnetwork) and abi
module.exports = solc.compile(source,1).contracts[':Inbox'];
