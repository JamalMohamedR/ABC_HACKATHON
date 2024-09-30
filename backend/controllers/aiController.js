const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const storeContent = async (file) => {
    const metadata = {
        fileName: file.originalname,
        uploader: '0xYourEthereumAddress',
        timestamp: Date.now(),
    };

    // Simulating storing metadata on the blockchain
    console.log('Storing metadata on blockchain:', metadata);

    // Example transaction (replace with actual smart contract interaction)
    const txHash = await web3.eth.sendTransaction({
        from: metadata.uploader,
        to: '0xSmartContractAddress',
        data: web3.utils.toHex(JSON.stringify(metadata)),
    });

    return txHash;
};

module.exports = { storeContent };
