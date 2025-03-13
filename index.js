const {Web3} = require('web3');
{
    //importing in a frontend application
//import Web3  from 'web3';
}
const customProvider = {
    sendAsync: (payload,cb)=>{
        console.log("you called");
        console.log(payload);
        cb(undefined,100);

    }
}
//const provider = new web3.providers.httpProvider('http://localhost:8545');
const web3 = new Web3(customProvider);
//connected to the blockchain;
web3.eth.getBlockNumber().then(()=>console.log('done'));