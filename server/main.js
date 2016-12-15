import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  // Retrieve
  var MongoClient = require('mongodb').MongoClient;

  // Connect to the db
  MongoClient.connect("mongodb://root:root@ds163377.mlab.com:63377/names", function(err, db) {
    if(!err) {
      console.log("We are connected");
    }
  });
});