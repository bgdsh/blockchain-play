/**
Should run cmd  `admin.startRPC("127.0.0.1", 8545, "*", "web3,net,eth")`  in the geth console
 */
var Web3 = require('web3');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var coinbase = web3.eth.coinbase;
console.log(coinbase);

var balance = web3.eth.getBalance(coinbase);
console.log(balance.toString(10));
