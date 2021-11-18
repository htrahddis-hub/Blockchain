const {Blockchain, Transaction}=require('./blockchain.');

let siddharthCoin = new Blockchain();

siddharthCoin.createTransaction(new Transaction('address 1', 'address2', 100));
siddharthCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Starting the miner....');
siddharthCoin.minePendingTransactions('siddharth-address');

console.log('/nBalance of Siddharth  is', siddharthCoin.getBalanceOfAddress('siddharth-address'));

console.log('\n Starting the miner....');
siddharthCoin.minePendingTransactions('siddharth-address');

console.log('/nBalance of Siddharth  is', siddharthCoin.getBalanceOfAddress('siddharth-address'));
