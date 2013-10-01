> use school
> db.students.count() 
200
Let's see what Demarcus Audette's record looks like:
>db.students.find({_id:100}).pretty()
{
	"_id" : 100,
	"name" : "Demarcus Audette",
	"scores" : [
		{
			"type" : "exam",
                        "score" : 47.42608580155614
		},
		{
			"type" : "quiz",
                        "score" : 44.83416623719906
		},
		{
			"type" : "homework",
                        "score" : 39.01726616178844
		}
	]
}


> db.students.aggregate({'$unwind':'$scores'},{'$group':{'_id':'$_id', 'average':{$avg:'$scores.score'}}}, {'$sort':{'average':-1}}, {'$limit':1})

answer: 13