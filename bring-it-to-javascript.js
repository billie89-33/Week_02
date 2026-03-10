let cart =[]

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