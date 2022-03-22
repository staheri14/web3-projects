const Web3 = require('web3');
const url = 'https://ropsten.infura.io/v3/f7d59d1679364f948826c7c269c1a3d6'
const web3 = new Web3(url);
var contract_address = '0xf002275490C2b62d786E22091815D70D54A379d5'

var options = {
reconnect: {
        auto: true,
        delay: 5000, // ms
        maxAttempts: 5,
        onTimeout: false
},
address: contract_address
};

var subscription = web3.eth.subscribe('logs', options, function(error, result){
    if (!error) console.log('got result');
    else console.log(error);
}).on("data", function(log){
    console.log('got data', log);
}).on("changed", function(log){
    console.log('changed');
});