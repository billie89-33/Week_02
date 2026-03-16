//กำหนดคำสั่งให้ดึงข้อมูลมาเพียง 1 เอกสาร ให้หา collection ที่มี field location-address-city
//และสุดท้าย "La Quinta" จะต้องกำหนดเพราะเราใช้ findOne 
db.theaters.findOne({ "location.address.city": "La Quinta" })


// plot: ค้นหาในฟิลด์ //$regex:มองหาคำว่า "American" ภายในเนื้อหา ($options: "i" กำหนดให้เป็น Case-insensitive (ไม่สนใจอักษรพิมพ์เล็กหรือพิมพ์ใหญ่))
db.movies.find({ plot: { $regex: "American", $options: "i" } })


// ดึงข้อมูล collection  //.sort เรียงลำดับได้ทุกประเภทข้อมูล{ runtime: -1 } -1มากไปน้อย 1น้อยไปมาก
//คือการสั่งให้ MongoDB ส่งข้อมูลกลับมา "สูงสุดแค่ 5 รายการแรก" 
db.movies.find({}).sort({ runtime: -1 }).limit(5)

