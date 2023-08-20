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

// let numberOfSeries = prompt("Nechta serial ko’rdingiz?")

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
//     let lastSerial = prompt("Oxirgi ko`rgan serialingiz?")
//     let payment = prompt("Necha baho berasiz?")
//     seriusData[lastSerial] = payment;
// }

// seriesDB.series = seriusData;

// console.log(seriesDB);




let numberOfSeries = prompt("Nechta serial ko’rdingiz?")

let seriesDB = {
    "count": numberOfSeries,
    "series": {},
    "actors": {},
    "genres": [],
    "privat": false
};

let seriusData = {}
for (i = 0; i < 2; i++) {
    let lastSerial = prompt("Oxirgi ko`rgan serialingiz?")
    let assesment = prompt("Nechi baxo berasiz?")
    seriusData[lastSerial] = assesment
};

seriesDB.series = seriusData;

console.log(seriesDB);