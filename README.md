1. **_TITLE_**
   This is a blockchain for recoding file property to prevent/detect tempering
2. RUNNING THE PROJECT
   it is easy to run and interact with this blockchain project
   a. clone the repository
   b. follow this to by uncommenting the test.js codes groups to archive any
   disired results
   `VIEW EMPTY BLOCKCHAIN`
   1. OUR first test is to view the blockchain with just the genesis block
      uncomment the first test
      '''
      console.log(securecoin);
      '''
   2. ADDING NEXT BLOCK WITH ITS FILE DATA
      We need to do proof of work to get nounce , then use the nounce to calculate the block hash
      then use it to create new block
      '''
      /_PROOF OF WORK METHOD _/ i.e calculating for the second block..for the third block use a valid second blockhash and not zero for ourcase since it was agenesis block with no previous blocks.
      const previousBlockHash = "0";
      const currentBlockData = [
      {
      name: "Worst business",
      size: "350MB",
      type: "WORD",
      author: "Robert",
      year: 1980,
      },
      ];

const noncea = 42318;
// run proof of work method first then se that goten noucnce to calculate the blockhash
console.log(securecoin.proofOfWork(previousBlockHash, currentBlockData));
console.log(
securecoin.hashBlock(previousBlockHash, currentBlockData, noncea)
);

3.  CREATE NEW BLOCK
    After getting the blockhash from our above method, use the hash to add the next block. The block takes anounce, current blockhash and previous blockhash as provided in the example code for adding the second block
    '''
    securecoin.createNewBlock(
    228136,
    "0",
    "000054687e7ab59518661868d09f84ec20c4515f80d8738bc3b527e37fa9470f"
    );
    console.log(securecoin);
    '''
4.  ADDING FILE RECORDS/TRANSACTION
    Our next step is to add a transaction and in our case the file details. This Transactions need to be mined for it to be added to the second block created below.
    To mine we have to add another block,for our case the thid block
    '''
    securecoin.createNewTransaction(
    "Good business",
    "350MB",
    "WORD",
    "Robert",
    1980
    );
    console.log(securecoin);
    '''
5.  Mining the second block
    To add our file detials to the second block, we need to do mining by adding the third block. we have to do what we did in adding the second again i.e calculating the nounce and blockhash then use it accordingly to add/create the next block

This process repeats like this for the number of blocks you want to have
NOTE. DON'T Remove initial codes for added first block, second and third. the code needs to be there as you run the test file to view all the blockchain
When doing proofofwork and calculating blockhash, comment other added block and transactions code to avoid them been shown in the terminal and coonfusing you.
RUN **_ node test.js_** to run the test file and view the results
