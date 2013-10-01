db.data.find({ "Wind Direction" : { $gte : 180, $lte : 360}}).sort({ Temperature : 1})

answer: New Mexico