# สรุปโครงสร้างโปรเจกต์ MongoDB (Chrome Burger)

โฟลเดอร์นี้ประกอบด้วยสคริปต์ MongoDB (`.mongodb.js`) สำหรับระบบจัดการร้านอาหาร/POS โดยใช้ฐานข้อมูลชื่อ **`chrome_burger`** ซึ่งมีการออกแบบโครงสร้างข้อมูลทั้งแบบอ้างอิง (Referencing) และแบบฝังตัว (Embedding)

## รายละเอียดไฟล์ในโปรเจกต์

### 1. `01_suppliers.mongodb.js`
*   **วัตถุประสงค์:** จัดการข้อมูลผู้จัดจำหน่ายวัตถุดิบ (Suppliers)
*   **คอลเลกชัน:** `suppliers`
*   **โครงสร้างข้อมูล:**
    *   `name`: ชื่อบริษัทผู้จัดจำหน่าย
    *   `contact_person`: ชื่อผู้ติดต่อ
    *   `phone_number`: เบอร์โทรศัพท์

### 2. `02_staff.mongodb.js`
*   **วัตถุประสงค์:** จัดการข้อมูลพนักงานในร้าน
*   **คอลเลกชัน:** `staff`
*   **โครงสร้างข้อมูล:**
    *   `first_name`: ชื่อจริง
    *   `last_name`: นามสกุล
    *   `role`: ตำแหน่ง (เช่น Cashier, Cook)

### 3. `03_ingredients.mongodb.js`
*   **วัตถุประสงค์:** จัดการคลังวัตถุดิบ (Ingredients)
*   **คอลเลกชัน:** `ingredients`
*   **ความสัมพันธ์ (FK):**
    *   `supplier_id` → เชื่อมไปยัง `suppliers._id` (Referencing)
*   **โครงสร้างข้อมูล:**
    *   `name`: ชื่อวัตถุดิบ
    *   `stock_level`: จำนวนคงเหลือ
    *   `unit`: หน่วยเรียก (เช่น pcs, heads)
    *   `supplier_id`: ID ของผู้จัดจำหน่าย

### 4. `04_menu_items.mongodb.js`
*   **วัตถุประสงค์:** รายการอาหารในเมนูและสูตรอาหาร (Recipes)
*   **คอลเลกชัน:** `menu_items`
*   **ความสัมพันธ์ (FK):**
    *   `recipe.ingredient_id` → เชื่อมไปยัง `ingredients._id` (Embedded Referencing)
*   **โครงสร้างข้อมูล:**
    *   `name`: ชื่อเมนู
    *   `description`: รายละเอียดอาหาร
    *   `price`: ราคา
    *   `category`: หมวดหมู่
    *   `recipe`: รายการวัตถุดิบที่ต้องใช้ (ประกอบด้วย `ingredient_id` และ `quantity_needed`)

### 5. `05_orders.mongodb.js`
*   **วัตถุประสงค์:** บันทึกการสั่งซื้อ (Orders)
*   **คอลเลกชัน:** `orders`
*   **ความสัมพันธ์ (FK):**
    *   `staff_id` → เชื่อมไปยัง `staff._id` (Referencing)
    *   `items.menu_item_id` → เชื่อมไปยัง `menu_items._id` (Embedded Referencing)
*   **โครงสร้างข้อมูล:**
    *   `order_date`: วันที่สั่งซื้อ
    *   `total_price`: ราคารวม
    *   `staff_id`: ID พนักงานที่รับออเดอร์
    *   `items`: รายการอาหารที่สั่ง (มี `menu_item_id`, `name`, `price`, `quantity`)

### 6. `query.mongodb.js`
*   **วัตถุประสงค์:** ตัวอย่างการเขียน Query เพื่อดึงข้อมูล
*   **เนื้อหา:** การใช้ `$lookup` เพื่อทำ Aggregation (คล้ายการ Join) ระหว่าง `ingredients` และ `suppliers`

---

## สรุปแนวคิดการออกแบบฐานข้อมูล (Data Modeling)

1.  **Hybrid Approach:** โปรเจกต์นี้แสดงให้เห็นถึงการเลือกใช้ความสัมพันธ์ที่เหมาะสม
    *   **Referencing:** ใช้กับข้อมูลที่มีขนาดใหญ่หรือมีการเปลี่ยนแปลงบ่อย เช่น `suppliers` และ `staff`
    *   **Embedding:** ใช้กับข้อมูลที่เป็นส่วนประกอบหนึ่งของกันและกัน เช่น `recipe` ใน `menu_items` หรือ `items` ใน `orders`
2.  **Aggregation:** มีการใช้ `$lookup` เพื่อดึงข้อมูลที่อยู่คนละคอลเลกชันมาแสดงผลร่วมกัน
3.  **Denormalization:** ในคอลเลกชัน `orders` มีการเก็บชื่อและราคาอาหารซ้ำซ้อนไว้ เพื่อความรวดเร็วในการอ่านข้อมูลและเป็นประวัติที่ถูกต้องของออเดอร์นั้นๆ
