const Web3 = require('web3');
const url = 'wss://mainnet.infura.io/ws/v3/7e5ab21979e2444681fcfcc5974739f4';
const web3 = new Web3(url);

var options = {
reconnect: {
        auto: true,
        delay: 5000, // ms
        maxAttempts: 5,
        onTimeout: false
},
address: '0x514910771af9ca656af840dff83e8264ecf986ca', // chainlink contract address on Ethereum BC
topics: [
'0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' // the hash of Transfer event on chainlink contract
]
};

var subscription = web3.eth.subscribe('logs', options, function(error, result){
    if (!error) console.log('got result');
    else console.log(error);
}).on("data", function(log){
    console.log('got data', log);
}).on("changed", function(log){
    console.log('changed');
});

