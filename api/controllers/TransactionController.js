'use strict';

var Transaction = require("../models/Transaction");
var JsonDB = require('node-json-db');

var db = new JsonDB("myTransaction", true, false)
var new_transaction;
var arrayTransaction =[];
var transactionMap={};
var transactionMapByParentId={};
var i=1;

exports.create_a_transaction = function(req, res) {
  console.log("Creating new transaction");

  var transactionId= i; 
  var amount=req.body["Amount"];
  var type=req.body["Type"];
  var parentId=req.body["ParentId"];

  //loading transaction type transaction map as Map<transactionType,transactionId>
  var key=req.body["Type"];
  var value=transactionId;
  transactionMap[key]=transactionMap[key] || [];
  transactionMap[key].push(value);

  //loading parent id transaction map as Map<parentId,transactionId>
  if(parentId!=0 && parentId<=i){
     var obj={
        TransactionId : transactionId,
        amount : amount,
        type : type,
        parentId : parentId
     };
     arrayTransaction.push(obj);
     i++;

     transactionMapByParentId[parentId]=transactionMapByParentId[parentId] || [];
     transactionMapByParentId[parentId].push(obj);
  }else{
    res.json("Invalid parent id");
  }
  console.log("New transaction is created");
  res.json(arrayTransaction);
};

exports.list_all_transactions=function(req,res){
  res.json(arrayTransaction);
};

exports.find_by_transaction_Type=function(req,res){
  var transType=req.query.type;
  res.json(transactionMap[transType]);
};

exports.find_by_parent_id=function(req,res){
  var parentId=req.query.parentId;
  var tempArr=[];
  var sum=0;
  tempArr=transactionMapByParentId[parentId];
  tempArr.forEach(function(value) {
    console.log(value);
    sum=sum+value.amount;
  });
  res.json(sum);
};