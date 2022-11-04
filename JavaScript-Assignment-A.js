/*
     JavaScript Assignment A
     ASSIGNMENT NOTES:
     Do not change the code below.
     Add your code in the 'Answers Section'.
*/

var cities = [
  "Abu Dhabi",
  "Abuja",
  "Cairo",
  "???",
  "Amman",
  "Islamabad",
  "Tokyo",
  "Beirut",
  "???",
  "Ottowa",
  "New Delhi",
  "Brasília",
];

var countries = [
  "UAE",
  "Nigeria",
  "Egypt",
  "???",
  "Jordan",
  "Pakistan",
  "Japan",
  "Lebanon",
  "???",
  "Canada",
  "India",
  "Brazil",
];

/******** Answers Section ********/
// 1. Create a for loop to iterate over 'cities'

// 2. Inside the for loop, console.log() the country for that city (e.g, "Abu Dhabi, UAE")
// Hint: use a counter variable to access both 'cities' and 'countries'

// 3. If the name of a city is missing (i.e there is '???'), use console.log("Oops!")

// NOTE: For 2 and 3, use if/else. There should be no '???' in the console!

//STEP 1
console.log("STEP 1: \n");
for (var i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

console.log("-x-x-x-x-x-x-x-x-x-x-x-x-x-");

//STEP 2
console.log("STEP 2:");
for (var i = 0, j = 0; i < cities.length, j < countries.length; i++, j++) {
  console.log("City: " + cities[i] + " | Country: " + countries[j]);
}

console.log("-x-x-x-x-x-x-x-x-x-x-x-x-x-");

//STEP 3
console.log("STEP 3:");
for (var i = 0, j = 0; i < cities.length, j < countries.length; i++, j++) {
  if (cities[i] === "???" || countries[j] === "???") {
    console.log("Oops!");
  } else {
    console.log("City: " + cities[i] + " | Country: " + countries[j]);
  }
}
