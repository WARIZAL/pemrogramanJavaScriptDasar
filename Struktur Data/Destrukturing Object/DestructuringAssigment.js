const profile = {
    firstName:"warizal",
    lastName:"ilwi",
    age:"21"
        
}

let firstName = "Tedi";
let lastName = "irawan";
let age = 21;

//Menginisialisasikan nilai baru melalui destrukturing Object
({firstName, age}=profile);

console.log(firstName);
console.log(age);

// console.log(profile)