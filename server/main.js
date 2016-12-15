import { Meteor } from 'meteor/meteor';
import '../imports/api/names.js';

Meteor.startup(() => {

  // Retrieve
  var MongoClient = require('mongodb').MongoClient;

  // Connect to the db
 MongoClient.connect("mongodb://root:root@ds163377.mlab.com:63377/names", function(err, db) {
    if(err) {
      console.log("Error: " + err);
    }
    else {
      console.log("We are connected")

      db.collection('names_test', {strict:true}, function(err, collection) {
        if(err) {
          console.log("Error: " + err);
        }
        else {
          collection.findOne({Name:"Aki"}, function(err, item) {
              if(err) {
                console.log("Error: " + err);
              }
              else {
                console.log(item);
              }
          });
        }
      });
    }
  });
});
