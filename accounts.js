const Web3js = require("web3");
const dotenv = require("dotenv");

dotenv.config();

//let web3js = new Web3js(Web3js.currentProvider)
//let web3js = new Web3js(new Web3js.providers.HttpProvider('http://localhost:8545'));
let web3js = new Web3js('http://127.0.0.1:8545')


//console.log(web3js)
web3js.eth.getAccounts(console.log);

let account1 = web3js.eth.accounts.create()

console.log(account1)

let account2 = web3js.eth.accounts.privateKeyToAccount(account1.privateKey)

//console.log(account2)

//console.log(account2.address===account1.address)

let signedMessage = web3js.eth.accounts.sign("Hello World!", account1.privateKey)

console.log("Signed message >>>>>> %s", signedMessage)

address = web3js.eth.accounts.recover(signedMessage)

console.log(address)


let balance = web3js.eth.getBalance("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", "latest").then(console.log)


//web3js.eth.getTransactionCount(console.log)
//web3js.eth.net.getId(console.log)
//web3js.eth.getGasPrice(console.log)

tx = {
    nonce: "0x1",
    from: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
    to: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
    data: "0x152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6103b9816103bc565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610442576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806105016026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a265627a7a72315820bfd92f1c53d71d78ec76e6baabe3816e4b0f48786305a67c86675e9856f673e264736f6c634300050b0032",
    value: "1000000000000000000",
    gasPrice: "20000000000",
    gas: "31000",
    //chainId: "0x3"
  }


let signedTransaction = web3js.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY_LOCAL, (error, signed) => {
    console.log("### Signed Transacion 1 ### ", signed)
})

console.log("### Signed Transacion ### ", signedTransaction)

web3js.eth.accounts.recoverTransaction(signedTransaction.rawTransaction).then(console.log)
