
function Transaction(TransactionId , Amount, Type, ParentId) {       //constructor
    this.TransactionId = TransactionId || null;
    this.Amount  = Amount  || null;
    this.Type = Type || null;
    this.ParentId = ParentId || null;
}

Transaction.prototype.getTransactionId = function() {
    return this.TransactionId;
}

Transaction.prototype.setTransactionId = function(TransactionId) {
    this.TransactionId = TransactionId;
}

Transaction.prototype.getAmount = function() {
    return this.Amount;
}

Transaction.prototype.setAmount = function(Amount) {
    this.Amount = Amount;
}

Transaction.prototype.getType = function() {
    return this.Type;
}

Transaction.prototype.setType = function(Type) {
    this.Type = Type;
}

Transaction.prototype.getParentId = function() {
    return this.ParentId;
}

Transaction.prototype.setParentId = function(ParentId) {
    this.ParentId = ParentId;
}

module.exports = Transaction;  