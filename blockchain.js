//importing sha256
const sha256 = require("crypto");

//1 function prototype
function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];

  //new
  this.createNewBlock(100, "0", "0");
}

// 2. Function to creat a new block
Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  // new block object
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash,
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};

// return last block
Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

// 3. create a new transaction
Blockchain.prototype.createNewTransaction = function (
  name,
  size,
  type,
  author,
  year
) {
  //transaction object
  const newTransaction = {
    name: name,
    size: size,
    type: type,
    author: author,
    year: year,
    // transactionId: uuid().split("-").join(""),
  };
  // push the transaction to the blockchain
  this.pendingTransactions.push(newTransaction);
  // return the block that contains our transaction which is the last one
  return this.getLastBlock()["index"] + 1;
};

// sha256 hashing to hash our block data
Blockchain.prototype.hashBlock = function (
  previousBlockHash,
  currentBlockData,
  nonce
) {
  //object
  const dataAsString =
    previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
};

// proof of work

Blockchain.prototype.proofOfWork = function (
  previousBlockHash,
  currentBlockData
) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  while (hash.substring(0, 4) !== "0000") {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    //console.log(hash);
  }

  return nonce;
};

// enable export of blockchain constructor function
module.exports = Blockchain;
