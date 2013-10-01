use agg
db.zips.aggregate([
   {$match: {state: {$in:['CA','NY']}},
   // group by state, city
   {$group:
     {
       _id: {state:"$state", city:"$city"},
       pop: {$sum:"$pop"}
     }
    },
    // only look at cities over 25,000
    {$match:
     {pop:{"$gt":25000}}
    },
    // get the average population across those cities
    {$group:{
        _id: null,
        pop: {$avg:"$pop"}
    }
    }
    }])

// answer = 82541