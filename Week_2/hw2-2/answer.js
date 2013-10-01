1st solution:

	db.data.find().sort({ Temperature : -1}, {'State': 1}).limit(1)

	db.data.find({ State: "New Mexico"}).sort({ Temperature : -1}).limit(1)

	db.data.update({ "_id" : ObjectId("5213ad8a80d522dde45095b9") }, { $set : { "month_high" : true }});
	db.data.update({ "_id" : ObjectId("5213ad8a80d522dde4509856") }, { $set : { "month_high" : true }});
	db.data.update({ "_id" : ObjectId("5213ad8a80d522dde4509b7f") }, { $set : { "month_high" : true }});
	db.data.update({ "_id" : ObjectId("5213ad8a80d522dde45093f6") }, { $set : { "month_high" : true }});

	validation code: WSRMOzQ4KTKhFEC6rUDn



2nd solution(run as a programm):

	var client = require('mongodb').MongoClient;

	client.connect('mongodb://localhost:27017/weather', function(err, db) {
		if (err) throw err;

		var query = {};
		var projection = {'State':1, 'Temperature':1};

		var cursor = db.collection('data').find(query, projection);

		// Sort by state and then by temperature (decreasing)
		cursor.sort([['State',1], ['Temperature',-1]]);

		var state = '';	// initialize to dummy value
		var operator = {'$set':{'month_high':true}};

		cursor.each(function(err, doc) {
			if (err) throw err;

			if (doc == null) {
				return db.close();
			} else if (doc.State !== state) {
				// first record for each state is the high temp one
				state = doc.State;

				db.collection('data').update({'_id':doc._id}, operator, function(err, updated) {
					if (err) throw err;
				});
			}
		});
	});

