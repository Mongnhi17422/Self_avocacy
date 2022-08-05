// Bai 1:
var student = student("Mộng Nhi", 18, "An Giang");
function student(name, age, address) {
    var obj = {
      name:  name,
      age: age,
      address: address
    };
    return obj;
  }
  console.log(student)




// Bai 2:
var smartPhones = [
    { name: 'iphone', price:649},
    { name: 'Galaxy S6', price:576},
    { name: 'Galaxy Note 5', price: 489}

];
var prices = smartPhones.map((smartPhone) => {
    return smartPhone.price;
  });
  console.log('ES6: ',prices);




// Bai 3:
const foo1 = (x,y,z)=> console.log(x,y,z);

const foo2=() => alert('Hello')

const foo3 = (a, b) => a+b*100


// Bai 4:

https://github.com/hieu1966hn/HDT-JSA22/tree/main/SS9/ChuaBT_checkpoint2







