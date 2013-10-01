use blog
db.posts.aggregate(
  [
    {$group: {_id: "$comments.author"}},
    {$unwind: "$_id"},
    {$group: {
      _id: "$_id", numberof: {$sum: 1}
    }},
    {$sort: {numberof: -1} },
    {$limit: 1}
  ]
)

// answer: Mikaela Meidinger