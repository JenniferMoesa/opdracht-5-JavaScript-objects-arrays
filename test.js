// deel 1 Objecten

// 1. Maak een object genaamd person.
const person = {
name: "Jennifer", //person heeft de volgende key-value pairs / properties: name en age. Vul hier je eigen naam en leeftijd in.
age: 40,
evaluations: [7, 10, 9],
};

// 3. Gebruik console.log(person) en run je JavaScript programma, om je object te loggen.
console.log(person);

console.log(person.name);// 4. Log alleen de value van de naam, door middel van de key name

console.log(person.age);// 5. Log alleen de leeftijd age

// bracket notation
console.log(person["name"]); // 6. Gebruik de bracket-notation voor het loggen van de bovenstaande 2 properties
console.log(person["age"]);

// 7 en 8. Log alleen de property evaluations .
console.log(person.evaluations);




// DEEL 2: ARRAYS

// 2. Vul deze array met minstens 3 verschillende kleuren, in de vorm van strings
const colorsArray = ["roze", "zwart", "paars"];

// 3. Log je nieuwe array naar de console.
console.log(colorsArray);

// 4. Log de lengte van je array naar de console.
console.log(colorsArray.length);

// 5. Log het eerste element van je array naar de console.
console.log(colorsArray[0]);

//6. Log het laatste element van je array naar de console.
console.log(colorsArray[colorsArray.length - 1]);

// 7. Voeg een 4de element toe aan je array met de push method.
colorsArray.push("turquoise");
console.log(colorsArray);

// 8. Voeg een cijfer toe aan je array met de push methode
colorsArray.push(5);
console.log(colorsArray);

// 9. Voeg een object toe aan je array met de push methode.
colorsArray.push({ greeting: "Hoi, ik ben een object." });
console.log(colorsArray);

// 10. Log alleen de begroeting van het object (het laatste element), naar de console.
console.log(colorsArray[colorsArray.length - 1].greeting);


// Deel 3: Bekijk een "real-life" object

const catBreeds = [
  {
    name: "Abyssinian",
    description:
      "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: [
      "Active",
      "Energetic",
      "Independent",
      "Intelligent",
      "Gentle",
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
      favourite_food: "fish",
      medium_liked_food: "dried fruits",
      disliked_food: "walnuts",
    },
  },
  {
    name: "Aegean",
    description:
      "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
      favourite_food: "tuna",
      medium_liked_food: "canned food",
      disliked_food: "all fruits",
    },
  },
  {
    name: "American Bobtail",
    description:
      "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [
      "Intelligent",
      "Interactive",
      "Lively",
      "Playful",
      "Sensitive",
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
      favourite_food: "meaty things",
      medium_liked_food: "tuna",
      disliked_food: "canned food",
    },
  },
];

//  1. Log de naam van het laatste kattenras.
console.log("Naam kattensoort 3:", catBreeds[2].name); //De computer telt vanaf o, dus het derde object is nummer 2.

//   2. Log de energy levels van de eerste kat.
console.log("Energy level van de eerste kat:", catBreeds[0].energy_level);//De computer telt vanaf 0, dus de eerste kat is nummer o.

//   3.Log het eerste temperament van de temperamenten van de tweede kat.
console.log("Eerste temperament kat 2:", //De tweede kat is nummer 1.
catBreeds[1].temperament[0]);// Het eerste temperament is nummer 0.

//   4. Log het laatst temperament van de temperamenten van de derde kat.
const lengthTemperamentsCatThree = catBreeds[2].temperament.length;

console.log("Laatste temperament kat 3:", //De derde kat is nummer 2
catBreeds[2].temperament[lengthTemperamentsCatThree - 1]);//De laatste specificatie in een array geef je aan met -1


//   5. Log het favoriete voedsel van de derde kat
console.log("Favo voedsel van kat 3:", catBreeds[2].food.favourite_food);