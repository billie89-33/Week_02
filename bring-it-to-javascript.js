//เก็บของในตะกร้าเขียนไว้ก่อนเผื่่อได้ทำ
let cart =[]

//getusersName
const users = [];

//

register
function register(userName,Password){
    const user = {
        userName:userName,
        Password:Password,
        Walletbalance : 0
    };     
    users.push(user)
    console.log("สมัครสำเร็จ")
    }


//ระบบล็อคอิน
let currentUser = null;

function login(userName,Password){
    for(let i = 0; i < users.length; i++){
        if(users[i].userName === userName && users[i].Password === Password){
            currentUser = users[i];
            console.log("Login สำเร็จ");
            return;
        }
}
 console.log("รหัสผิดจ่ะ")
}

// ดูโปรไฟล์//ดึงcurrentUserมาใช้
function showMyProfile(){
    if(!currentUser) {
        console.log("login ก่อน");
        return; //สั่งหยุดถ้ายังไม่login
    }
    console.log("=======MyProfile=======");
    console.log(`${"ชื่อ"} ${currentUser.userName}`);
    console.log(`${"จำนวนเงิน"} ${currentUser.Walletbalance} ${"บาท"}`)
}






let ProductTvSamsung = {
    ProductId : "P001",
    ProductName : "Samsung Tv 55 inch",
    price : 5000,
    Stock : 10
}

let ProductHeadphones = {
    ProductId : "P002",
    ProductName : "Sony Headphones",
    price : 2000,
    Stock : 20
}

let ProductWashingMachine = {
    ProductId : "P003",
    ProductName : "Samsung Washing machine",
    price : 2500,
    Stock : 5
}


const products = [
  ProductTvSamsung,
  ProductHeadphones,
  ProductWashingMachine
];

const showcase = [
  ProductHeadphones.ProductName,
  ProductTvSamsung.ProductName,
  ProductWashingMachine.ProductName
];

//เลือกสินค้า
function chooseItem(products) {
    for(let i = 0; i < products.length; i++){
     console.log( ` ${i+1} ${products[i].ProductName} ${"ราคา"} ${products[i].price}` );
     
    }
} 


function addCart(product){
    cart.push(product);
    return `${product.ProductName} ${"price"} ${product.price}`;
}






///โชว์ชื่อสินค้าทั้งหมด
console.log(showcase.join(","));

//แสดงถ้าเลือกสินค้าชินนี้จะโชว์ราคา
console.log(addCart(ProductTvSamsung))

///แสดงDetailsสินค้าว่ามีอะไรบ้าง
chooseItem(products);

//สมัครสมาชิก
register("bowvorn",1234);
console.log(users)


//ล็อคอินดูสิ eiei ถ้าจะล็ฮคเอาท์แค่เอาชื่ออกตอนนี้ทำได้แค่นี้
login("bowvorn",1234)
//ดูโปรไฟล์
showMyProfile()

 