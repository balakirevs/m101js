import pymongo

from pymongo import Connection

#Get connection
connection = Connection('localhost', 27017)

db = connection.school

students_db = db.students

students = students_db.find()

for student in students:
	low_score = None
	for score in student['scores']:
		 if (score['type'] == 'homework') and ((low_score == None) or (score['score']<low_score['score'])):
	 			low_score = score

	students_db.update({'_id':student['_id']}, {'$pull': {'scores': low_score}})