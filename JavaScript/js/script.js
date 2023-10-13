// let IsmFamiliya = "otabek Fayziyev"
// const qiymat = "dsfsdfsdf"
// console.log(IsmFamiliya);

// IsmFamiliya = "otabek"
// console.log(IsmFamiliya);

// objects 
// const thief = {
//     boyi: 1.20,
//     jacket: "black",
//     isLong: false,
// }
// console.log(thief);

// array
// let cars = ["spark", "capriva", "gentra"];
// console.log(cars[0]);


// alert
// alert ("salom");

// const place = confirm("sen hali ham shu yerdamisan");
// console.log(place);

// const PromptPlace = +prompt("yoshing nechada?", "");
// console.log(PromptPlace - 10);

// const favouriteColor = [];

// favouriteColor[0] = prompt("Which color do you like? #1 ", "");
// favouriteColor[1] = prompt("Which color do you like? #2 ", "");
// favouriteColor[2] = prompt("Which color do you like? #3 ", "");

// console.log(favouriteColor);

// const biografiya = [];

// biografiya["ism"] = prompt("Ismingiz 1/3", "")
// biografiya["familiya"] = prompt("Familiyangiz  2/3", "")
// biografiya["yosh"] = prompt("Yoshingiz 3/3", "")
//  B U    K O D    X A T O  
// document.getElementById("demo").innerHTML = biografiya;

// console.log(biografiya);

// const cars = [];
// cars[0] = "Saab";
// cars[1] = "Volvo";
// cars[2] = "BMW";
// document.getElementById("demo").innerHTML = cars;


// ------------------------------------------------

// let name = prompt("Enter your name", "");
// let age = prompt("Enter your age", "");

// let data = {
//     name: name,
//     age: age
// };



// document.getElementById("name").textContent = data.name;
// document.getElementById("age").textContent = data.age;


// var age = 25;
// console.log(`Men ${age} yoshdaman`) // Men 25 yoshdaman

// let name = "otabek";
// console.log(`my name is ${name}`);


// -----------------------------  INCR   DECR

// let incr = 10;
// let decr = 10;

// console.log(incr++);
// console.log(decr--);
// console.log(incr++);
// console.log(decr--);

// console.log(10 % 3);


// let x= 5;
// x++;

// console.log(x);

// let y = 5;
// y--

// console.log(y);


// console.log(5*5 == "25");   // 2 talik == belgisi qiymatlarni bir biriga teng ekanligini solishtiradi
// console.log(5*5 === "25");  // 3 talik === belgisi qiymatlarni turini solishtiradi. MISOL: NUMBER === STRING


// ------------------------------ A M A L I Y O T -------------

// let numberOfSeries = prompt("Nechta serial ko`rdingiz?")

// let seriesDB = {
//     "numSerials": numberOfSeries,
//     "series": {},
//     "actors": {
//         "main": {}
//     },
//     "genres": [],
//     "privat": false
// }

// let seriusData = {}
// for (i = 0; i < 2; i++) {
//     if ( seriesDB[numSerials] === "" || seriesDB[numSerials] === null && seriesDB.series ===null ) {
//         let lastSerial = prompt("Oxirgi ko`rgan serialingiz?")
//     }else if {
//         let payment = prompt("Necha baho berasiz?")
//     };

//     seriusData[lastSerial] = payment;
// }

// seriesDB.series = seriusData;

// console.log(seriesDB);



// let numberOfSeries = prompt("Nechta serial ko`rdingiz?");

// let seriesDB = {
//     "numSerials": numberOfSeries,
//     "series": {},
//     "actors": {
//         "main": {}
//     },
//     "genres": [],
//     "privat": false
// };

// // if (seriesDB.numSerials >= "5") {
// //     console.log(" kam serial koribsiz");
// // } else {
// //     console.log("zor");
// // };

// for (let i = 0; i >= 1; i++) {
//     let a = prompt("Oxirgi ko`rgan serialingiz?"),
//         b = prompt("Necha baho berasiz?");

//     seriesDB.series [a] = b;
// }
// for (let i = 0; i < parseInt(numberOfSeries); i++) {
//     let lastSerial;
//     while (true) {
//         lastSerial = prompt("Oxirgi ko`rgan serialingiz?");
//         if (lastSerial === null || lastSerial.trim() === "") {
//             alert("Iltimos, savollarga javob bering.");
//         } else {
//             break;
//         }
//     }

//     let payment;
//     while (true) {
//         payment = prompt("Necha baho berasiz?");
//         if (payment === null || payment.trim() === "") {
//             alert("Iltimos, savollarga javob bering.");
//         } else {
//             break;
//         }
//     }

//     seriusData[lastSerial] = payment;
// }



// console.log(seriesDB);




// let numberOfSeries = prompt("Nechta serial ko’rdingiz?")

// let seriesDB = {
//     "count": numberOfSeries,
//     "series": {},
//     "actors": {},
//     "genres": [],
//     "privat": false
// };

// let seriusData = {}
// for (i = 0; i < 2; i++) {
//     let lastSerial = prompt("Oxirgi ko`rgan serialingiz?")
//     let assesment = prompt("Nechi baxo berasiz?")
//     seriusData[lastSerial] = assesment
// };

// seriesDB.series = seriusData;

// console.log(seriesDB);




// ----------------SHARTLIM OPERATORLAR------TERNARY--->

// let point = false;
// let result = point == true ? "o`chegirma 20%" : "o`chegirma 5%";
// console.log("siz uchun :", result);

// let client = false
// let discount = client ? '25%' : '5%';
// console.log('Discount:', discount);

// let sum=1000;
// let chek=true;
// let resultSum=chek? sum*0.8 : sum*0.95;

// console.log(resultSum);


// ----------- IF /   ELSE IF--------------

// let haur = 22;

// if ( haur >=6 && haur < 12) {
//     console.log("Hayrli tong");
// } else if (haur >= 12 && haur < 18 ) {
//     console.log("Hayrli kun");
// } else {
//     console.log("Hayrli kech");
// }


// ------------SWITCH CASE------

// let a = "book";

// // switch (a) {
// //     case "pencil":
// //         console.log("qalam");
// //         break;

// //     case "book":
// //         console.log("kitob");
// //         break;

// //     default:
// //         console.log("No`malum so`z");
// //         break;
// // };

// if (a === "pencil" ) {
//     console.log("qalam");
// } else if (a === "book"){
//     console.log("kitob")
// }else {
//     console.log("No`malum so`z");
// };












// ===========================  F U N C T I O N ==============

function person(firstname, lastname) {
    console.log(person("otabek", "Fayziyev"));
};

person();