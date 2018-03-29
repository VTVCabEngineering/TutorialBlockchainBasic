class Block {
    constructor() {
        this.index = 0
        this.previousHash = ""
        this.hash = ""
        this.timestamp = ""
        this.transactions = []
    }
    addTransaction(transaction) {
        this.transactions.push(transaction)
    }
    
    get key() {
       return JSON.stringify(this.transactions) + this.index + this.previousHash
    }
}

module.exports = Block



