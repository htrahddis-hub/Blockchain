const {Blockchain, Transaction}=require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('f33a92a6664d03f6ba429592d49f7d0e002b631f31a03548241247b9aa3ef93b');
const myWalletAddress =myKey.getPublic('hex');

let siddharthCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
siddharthCoin.addTransaction(tx1);


console.log('\n Starting the miner....');
siddharthCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Siddharth  is', siddharthCoin.getBalanceOfAddress(myWalletAddress));

