1. 
   use enron
   db.messages.find({ 'headers.From': 'andrew.fastow@enron.com', 'headers.To': 'jeff.skilling@enron.com' })
   answer: 3;

2. 
   use enron

    db.messages.aggregate([
       { $unwind: '$headers.To' },
       { $group: { _id: { 'from' : '$headers.From', 'to' :'$headers.To' },
                'sum': { $sum : 1 } } },
       { $sort : { 'sum' : 1 } }])

    answer: susan.mara@enron.com to jeff.dasovich@enron.com      

3. db.messages.update({ 'headers.Message-ID': '<8147308.1075851042335.JavaMail.evans@thyme>' }, { $addToSet: { 'headers.To': 'mrpotatohead@mongodb.com' } }) 

4. VQ3jedFjG5VmElLTYKqS

5. 
   a_1_b_1
   a_1_c_1
   c_1
   a_1_b_1_c_-1

6. 
   Set w=0, j=0 on writes
   Remove all indexes from the collection 

7. 
   44,822

8. Maybe, it depends on whether Node 2 has processed the write.
   
9. 
   patient_id 

10. 
   The query performed a full collection scan
   The query used an index for the sorting phase
   The query did not utilize an index to figure out which documents match the find criteria               