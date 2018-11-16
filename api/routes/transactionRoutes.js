'use strict';

module.exports = function(app) {
  var transactionFunction = require('../controllers/TransactionController');

  app.route('/transactionservice')
    .get(transactionFunction.list_all_transactions)
    .post(transactionFunction.create_a_transaction);

  app.route('/transactionservice/types')
    .get(transactionFunction.find_by_transaction_Type);

  app.route('/transactionservice/sum')
    .get(transactionFunction.find_by_parent_id);

};
