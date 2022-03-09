db = db.getSiblingDB("SDC");
db.getCollectionNames();

db.stylesAndSkusAndPhotos.aggregate(
  [

    {
      $group: {
        _id: "$productId",
        results: {
          $addToSet: {
            style_id: "$id",
            name: "$name",
            original_price: "$original_price",
            sale_price: "$sale_price",
            default_style: "$default_style",
            photos: { $arrayElemAt: ["$photos", 0] },
            skus: { $arrayElemAt: ["$skus.skus", 0] },
          },
        },
      },
    },
    { $sort: { _id: 1 } },
    {
      $merge: {
        into: "Combined_Styles",
        on: "_id",
        whenMatched: "replace",
        whenNotMatched: "insert"
      }
      }
  ],
  { allowDiskUse: true }
);

// db.styles.createIndex( { id: 1 } )

// db.styles.aggregate(
//   [
//     {
//       $lookup:
//         {
//           from: "groupedSkus",
//           localField: "id",
//           foreignField: "_id",
//           as: "skus"
//         }
//    },
//    {
//     $lookup:
//       {
//         from: "groupedPhotos",
//         localField: "id",
//         foreignField: "_id",
//         as: "photos"
//       }
//  }
//    ,
//     { $sort: { _id: 1 } },
//     {
//       $merge: {
//         into: "stylesAndSkusAndPhotos",
//         on: "_id",
//         whenMatched: "replace",
//         whenNotMatched: "insert"
//       }
//       }

//   ], { allowDiskUse: true });
