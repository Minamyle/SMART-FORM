


function handleClick(){

let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let email = document.getElementById("email").value;
let pwd = document.getElementById("pwd").value;
let phone = document.getElementById("phone").value;

//expensive7832@gmail.com
//2virusfounD
let namePattern = /^[a-z]{3,}/i
let emailPattern = /[\w]{5,}\@[a-z]{3,}\.[a-z]{2,}/i
let pwdPattern = /[a-zA-Z0-9]{5,}[A-Z]+[0-9]?/ // virusfounD
let phonePattern = /^\+[\d]{1,3}\(?[\d]{6,}\)?/         //+234(7030616632)


   if(fname === "" || lname === "" || email === "" || pwd === "" || phone === ""){
      document.getElementById("notification").style.display = "flex"
      document.getElementById("notification").style.backgroundColor = "rgb(123, 20, 08)"
      document.getElementById("text").innerText = "Input Field cannot be empty"

   }else if(!namePattern.test(fname) || !namePattern.test(lname)){
       alert("enter valid name");

   }else if(!emailPattern.test(email)){
      alert("enter valid email");

   }else if(!pwdPattern.test(pwd)){
      alert("enter strong password, it must be greater than 6");

   }else if(!phonePattern.test(phone)){
      alert("enter valid phone number with country code");

   }else{
      document.getElementById("notification").style.display = "flex"
      document.getElementById("notification").style.backgroundColor = "rgb(123, 205, 178)"
      document.getElementById("text").innerText = "success"
   }


}
document.getElementById("icon").onclick = function(){
   document.getElementById("notification").style.display ="none"
}


// class Person{
//    constructor(name, gender){
//       this.myname = name;
//       this.mygender = gender;
//    }

//    info(){
//       alert(`my name is ${this.myname} and i am a ${this.mygender}`)
//    }
// }

// class Car extends Person {
//    constructor(name, gender, year, model){
//       super(name, gender)
//       this.year = year;
//       this.model = model
//    }

//    carData(){
//       alert(`my name is ${this.myname} also a ${this.mygender} and the car i purchase is of ${this.year} ${this.model}`)
//    }
// }

// var c1 = new Car("kayode", "m", 2022, "nissan")
// var c2 = new Car(2020, "camry")

// //c1.info()

