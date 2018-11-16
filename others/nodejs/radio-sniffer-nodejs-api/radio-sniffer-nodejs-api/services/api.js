
'use strict';
var express = require('express');
var router = express.Router();

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var connected = false;
var async = require('async');


// Create connection to database
var config = {
    userName: 'sa', 
    password: 'cemozbas', 
    server: 'localhost',
    options: {
        database: 'RadioSnifferNew'
    }
}
var connection = new Connection(config);

var errorMessage = 'Error occurred';

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function (err) {
    if (err) {
        connected = false;
    } else {
        connected = true;
    }
});

/* GET home page. */
router.get('/test', function (req, res) {
    //res.render('index', { title: 'Express' });
    var message = 'songlist: ';
    if (connected)
        message += "connected"

    res.send(message);
});

router.get('/songList', function (req, res) {

    var query = 'select top(10) * from Artist;';

    getQueryResult(res, query);
});

router.get('/toplist', function (req, res) {
    try {
        // Get parameters
        var pageSize = req.query.pageSize;
        var index = req.query.index;

        if (pageSize === undefined || index === undefined)
            response.send(errorMessage);

        var query = 'select p.SongTitleId, a.Name, st.Title, count(*) as numberOfPlay \
        from PlayedTime p \
        inner join SongTitle st on st.Id = p.SongTitleId \
        inner join Artist a on a.Id = st.ArtistId \
        group by SongTitleId, st.Title, a.Name \
        order by numberOfPlay desc \
        offset ' + (index - 1) + ' rows \
        FETCH NEXT ' + pageSize + ' rows only';

        // result
        var jsonArray = [];

        async.waterfall([
            function (callback) {
                getQueryResult(res, query, callback);
            },
            function (callback) {
                var t = 8;
            }
        ]);

        var t = 2;
    }
    catch (err) {
        console.log(err);
        res.send('Error while reading');
    }
});

function Start(callback) {
    console.log('Starting...');
    callback(null, 'Jake', 'United States');
}

function Complete(err, result) {
    if (err) {
        callback(err);
    } else {
        console.log("Done!");
    }
}


function getQueryResult(response, query, callback) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    response.setHeader('Access-Control-Allow-Credentials', true); // If needed

    // result
    var jsonArray = [];

    // Read all rows from table
    var request = new Request(
        query,
        function (err, rowCount, rows) {
            //response.contentType('application/json');
            if (err) {
                //response.send('Error while reading');
                callback(err);
            } else {
                //response.send(JSON.stringify(jsonArray));
                return jsonArray;
                callback();
            }
        });

    // Get all data
    request.on('row', function (rows) {
        var rowObject = {};
        rows.forEach(function (column) {
            rowObject[column.metadata.colName] = column.value;
        });
        jsonArray.push(rowObject)
    });

    // Execute SQL statement
    connection.execSql(request);
}



function Read() {
    
}


module.exports = router;
