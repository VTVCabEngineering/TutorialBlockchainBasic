let Block = require('./models/block')
let Transaction = require('./models/transaction')
let BlockChain = require('./models/blockchain')

//Tạo genesis block
let genesisBlock = new Block()
let blockchain = new BlockChain(genesisBlock)

//Tạo ra giao dịch của block và thêm block vào blockchain
let transaction = new Transaction('khachuong', 'quochung', 100)
let firstBlock = blockchain.getNextBlock([transaction])
blockchain.addBlock(firstBlock)

let secondBlockTransaction = new Transaction('hongcuc', 'leanh', 150)
let secondBlock = blockchain.getNextBlock([secondBlockTransaction])
blockchain.addBlock(secondBlock)

console.log(blockchain)

console.log('[Before] Is this blockchain valid? ' + blockchain.isChainValid())

let secondBlockTransactionModified = new Transaction('hongcuc', 'leanh', 100)
blockchain.blocks[1].transactions = [secondBlockTransactionModified]

console.log('[After] Is this blockchain valid? ' + blockchain.isChainValid())

