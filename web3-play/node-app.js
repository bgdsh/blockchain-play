/**
Should run cmd  
`admin.startRPC("127.0.0.1", 8545, "*", "web3,net,eth")`  
in the geth console
 */
var Web3 = require('web3');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

console.log('web3.version.api:', web3.version.api);
console.log('web3.version.node:', web3.version.node);
console.log('web3.version.network:', web3.version.network);
console.log('web3.version.ethereum:', web3.version.ethereum);
// console.log('web3.version.whisper:', web3.version.whisper); // will throw an error
console.log('web3.isConnected:', web3.isConnected());
console.log('web3.currentProvider:', web3.currentProvider);

var coinbase = web3.eth.coinbase;
console.log(coinbase);

var balance = web3.eth.getBalance(coinbase);
console.log(balance.toString(10));

//using callbacks
web3.eth.getBlock(48, cb);

//Batch request
var batch = web3.createBatch();
batch.add(web3.eth.getBalance.request('0x0000000000000000000000000000000000000000', 'latest', cb))
// batch.add(web3.eth.contract(abi).at(address).balance.request(address, cb));
batch.execute();


function cb(error, result) {
    if (!error) {
        console.log(result)
    } else {
        console.error(error);
    }
}