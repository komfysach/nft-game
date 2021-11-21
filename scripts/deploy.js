const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(                        
      ["Komfy", "Butlerito", "Muffy"],       
      ["QmTG4RF12eGp315aUJ9eGqu8QB7KCj7ywq8SYt2LiaX998", 
      "QmShU4wJ3DDsiDKGQ7hZBurVrxMFq5PteAJX2GNZeBJZjc", 
      "QmbpRm2o3NNWC4qgAJzP1GuYVed6N5u6YTJzoaWQqnQrz8"],
      [100, 200, 300],                    
      [100, 50, 25],
      "Jacob Zuma", // Boss name
      "QmaUYLFenGn6MY14uDTKbjvn2cCsqnzYGRH965pz6BrNq6", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
    );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

//   let txn = await gameContract.mintCharacterNFT(1);
// await txn.wait(); 

// // We only have three characters.
// // an NFT w/ the character at index 2 of our array.
// txn = await gameContract.mintCharacterNFT(2);
// await txn.wait();

// txn = await gameContract.attackBoss();
// await txn.wait();

// txn = await gameContract.attackBoss();
// await txn.wait();

// console.log("Done!");

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