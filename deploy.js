const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider('mad mad shiver able ghost expand snack relief diagram cactus hungry scrub','https://rinkeby.infura.io/v3/611f2ddaa3f6447490e363c320dfe695');

const web3 = new Web3(provider);

const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments:["hi there!"]})
    .send({gas:'1000000',from :accounts[0]});

    console.log("Contract deployed to", result.options.address);
    provider.engine.stop()
};
deploy();
