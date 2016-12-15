import { Meteor } from 'meteor/meteor';
import '../imports/api/names.js';

Meteor.startup(() => {

  // Retrieve
  var MongoClient = require('mongodb').MongoClient;

  // Connect to the db
  MongoClient.connect("mongodb://root:root@ds163377.mlab.com:63377", function(err, db) {
    if(!err) {
      console.log("We are connected");
    }
  });
});
