use agg;
db.grades.aggregate([
	// unwind the scores
	{$unwind: "$scores"},
	{$match:
	 {"scores.type":{$ne:"quiz"}}
	},
	// calculate a grade for each student in each class
	{$group:
	  {
	  	 _id: {student_id:"student_id", class_id: "$class_id"},
	  	 average: {$avg:"$scores.score"}
	  }
	},
	// now calculate the average in each class
	{$group:
	  {
	  	 _id: {class_id:"_id.class_id"},
	  	 class_avg : {$avg: "$average"}
	  }
	},
	// sort by class average
	{$sort:{'class_avg':-1}
    }
])

//answer = 1