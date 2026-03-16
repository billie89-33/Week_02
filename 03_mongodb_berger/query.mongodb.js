// The current database to use.
use('chrome_burger');

db.ingredients.aggregate([
 {
  $lookup: {
   from: "suppliers",
   localField: "supplier_id",
   foreignField: "_id",
   as: "supplier"
  }
 }
])
