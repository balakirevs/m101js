hw6.1: 
	Which of the following statements are true about MongoDB replication. Check all that apply.
	  - The minimum sensible number of voting nodes to a replica set is three.
	  - The oplog utilizes a capped collection.


hw6.2:
	Let's suppose you have a five member replica set and want to assure that writes are committed to the journal and are acknowledged by at least 3 nodes before you proceed forward. What would be the appropriate settings for w and j?
	  - w="majority", j=1

hw6.3:
	Which of the following statements are true about choosing and using a shard key:
	  - There must be a index on the collection that starts with the shard key.
      - Mongo can not enforce unique indexes on a sharded collection other than the shard key itself.
      - Any update that does not contain the shard key will be sent to all shards.

hw6.4:
	- s1


hw6.5: XdYfY6aqjqS3ik35qS6v