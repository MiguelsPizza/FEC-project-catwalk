db = db.getSiblingDB("SDC");
db.getCollectionNames();



db.skus.aggregate(
  [
    {
      $group: {
        _id: "$styleId",
        skus: { $addToSet: { id: "$id", size: "$size", quantity: "$quantity"}
      }
    }
    },
    { $sort: { _id: 1 } },
    {
      $merge: {
        into: "groupedSkus",
        on: "_id",
        whenMatched: "replace",
        whenNotMatched: "insert"
      }
      }

  ], { allowDiskUse: true });

  // db.groupedStyles.createIndex( { productId: 1 } )
