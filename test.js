// This should always remain uncommented
const Blockchain = require("./blockchain");

const securecoin = new Blockchain();
// Uncomment each step and run the tests to achieve the desired results

//1.view the blockchain with just the Genesis block without adding any block or data
console.log(securecoin);

/*2.  Adding the second Block  */
/* 2a. Do proof of work to get current block hash and nounce to use to Add next block */

// securecoin.createNewBlock(
//   228136,
//   "0",
//   "000054687e7ab59518661868d09f84ec20c4515f80d8738bc3b527e37fa9470f"
// );

//3. Add  atransaction
//securecoin.createNewTransaction(
//   "Good business",
//   "350MB",
//   "WORD",
//   "Robert",
//   1980
// );
// //Adding a block to mine the previous one
// securecoin.createNewBlock(
//   77238,
//   "000054687e7ab59518661868d09f84ec20c4515f80d8738bc3b527e37fa9470f",
//   "000052b39966dca8996d79c45aee5e3e9880728d8b9eb35530dd541f2855b6aa"
// );

// securecoin.createNewBlock(
//   34395,
//   "00006e9da30c315ac53a787d1081363928788da6e486cb257f0d3aa29cb8fbd5",
//   "00002d71597aad7340ef7c22ae6c35ca7159246cb9f314d4c4e4e1a755925604"
// );
/*PROOF OF WORK METHOD */
// const previousBlockHasha = "0";
// const currentBlockDataa = [
//   {
//     name: "Worst business",
//     size: "350MG",
//     type: "WORD",
//     author: "Robert",
//     year: 1980,
//   },
// ];

// const noncea = 42318;

// console.log(securecoin.proofOfWork(previousBlockHasha, currentBlockDataa));
// console.log(
//   securecoin.hashBlock(previousBlockHasha, currentBlockDataa, noncea)
// );
