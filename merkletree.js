
const sha256 = require("sha256")

const transactions = [
    {to: 'me', from: 'you', value: 10}, 
    {to: 'you', from: 'me', value: 5}, 
    {to: 'alice', from: 'bob', value: 5}, 
    {to: 'bob', from: 'me', value: 15}, 
    {to: 'jon', from: 'me', value: 15}, 
    {to: 'bob', from: 'sally', value: 1}, 
    {to: 'jan', from: 'sally', value: 105}, 
    {to: 'len', from: 'johanna', value: 1}
]

leaves = transactions.map((x) => sha256(JSON.stringify(x)))

console.log(transactions)
console.log(leaves)

const simpleMerkleTree = createMerkleTree(leaves)


let ok = verify(transactions[0], [sha256(JSON.stringify(transactions[1])), sha256(sha256(JSON.stringify(transactions[2])) + sha256(JSON.stringify(transactions[3]))), sha256(sha256(sha256(JSON.stringify(transactions[4])) + sha256(JSON.stringify(transactions[5]))) + sha256(sha256(JSON.stringify(transactions[6])) + sha256(JSON.stringify(transactions[7]))))])

console.log(ok)

function createMerkleTree(nodes){
    if (nodes.length > 1){
        let newNodes = []
        let leafNodes = []

        if (typeof nodes[0] == 'string'){
            nodes.forEach((value, index, array) => {
                leafNodes.push({hash: value})
            })
            nodes = leafNodes
        }

        console.log(leafNodes)

        if (nodes.length % 2 === 1){
            nodes.push(nodes[nodes.length-1])
        }

        nodes.forEach((value, index, array) => {
            if (index % 2 === 0){
                newNodes.push({hash: sha256(value.hash + array[index + 1].hash), children: [value, array[index + 1]]})
            }
        })

        console.log(newNodes)

        return createMerkleTree(newNodes)
    } else {
        return nodes[0]
    }
}

function verify(transaction, orderedHashes){
    // get the txHash
    let txHash = sha256(JSON.stringify(transaction))
    
    let hash = txHash
    for(var i = 0; i < orderedHashes.length; i++){
      hash = sha256(hash + orderedHashes[i])
    }
    
    return (hash === simpleMerkleTree.hash)
  }