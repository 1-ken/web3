const {Web3} = require('web3');
const MyContract = require('./build/contracts/MyContract.json')

const init = async () => {

const web3 = new Web3('http://localhost:8545')
//checking if the connection was a success


const id = await web3.eth.net.getId();
const deployedNetwork = MyContract.networks[id];

web3.eth.getBlockNumber().then((latestBlock) => {
    console.log(`✅ Connected to Blockchain. Latest Block: ${latestBlock}`);
});
const contract = new web3.eth.Contract(MyContract.abi, deployedNetwork.address);


web3.eth.getAccounts().then(accounts =>{
    console.log(`✅ Available Accounts:`, accounts)
})

}
init();