const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(                        
        ["Komfy", "Butlerito", "Muffy"],       
        ["https://i.imgur.com/9J5bkpy.gif", 
        "https://i.imgur.com/xouRPWa.png", 
        "https://i.imgur.com/ew3q0yt.jpg"],
        [100, 200, 300],                    
        [100, 50, 25],
        "Jacob Zuma", // Boss name
        "https://i.imgur.com/td48jhM.jpg", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
      );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;

// We only have three characters.
// an NFT w/ the character at index 2 of our array.
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

console.log("Done!");

  };


  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();