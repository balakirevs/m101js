use agg
db.zips.aggregate([
	{$project:
	  {
	  	first_char: {$substr : ["$city",0,1]},
	  	pop: 1,
	  	city: "$city",
	  	zip: "$_id",
	  	state: 1
	  }
	},
	{$match:
	 {
	 	 first_char: {$in:['0','1','2','3','4','5','6','7','8','9']} 
	 }
	},
	{$group:
	  {_id: null, population:{$sum:"$pop"}}
	}])

// answer = 298015