/**
 * Created by 1405741 on 21/11/2016.
 */
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;
var url = 'mongodb://<dbuser>:<dbpassword>@ds050879.mlab.com:50879/1405741';
var MongoClient = mongodb.MongoClient;
