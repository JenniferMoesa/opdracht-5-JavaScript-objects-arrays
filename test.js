
// deel 1

const age = 25;

if ( age >= 18) {
    document.write("Je mag naar binnen in de kroeg.");

} else {
    document.write("Je bent te jong. Je mag helaas niet naar binnen.");
}

if ( age >= 18 && age <= 25) {
    document.write("Je bent tussen de 18 - 25 jaar. Je krijgt 50% korting!");
 }


// deel 2

const isFemale = "male";

if ( isFemale === "female") {
    document.write(true);

} else {
    document.write(false);
}

const firstName = "Jennifer";

if ( firstName === "Sarah" || firstName === "Bram") {
    document.write("Je heet Sarah of Bram, je krijgt gratis bier!");
} else {
    document.write("Je heet geen Sarah of Bram. Helaas, je krijg geen gratis bier.");
}


// deel 3
const driverStatus = "bob";

if ( driverStatus === "bob") {
    document.write("Je mag rijden.");

} else {
    document.write("Je mag niet rijden.");
}

const totalAmount = 25;

if ( totalAmount >= 100) {
    document.write("Je hebt voor 100 euro of meer besteld. Je krijft een gratis flesje champagne!");
} else if ( totalAmount >= 50) {
    document.write("Je hebt voor meer dan 50 euro besteld. Je krijgt een gratis portie nachos!");
} else if ( totalAmount >= 25) {
    document.write("Je hebt voor meer dan 25 euro besteld. Je krijgt gratis (vega)bitterballen!");
} else {
    document.write("Je hebt voor minder dan 25 euro besteld. Je krijgt helaas geen korting.");
}

