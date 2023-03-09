let language ="French";
let greeting ="null"

switch(language){
    case "English":
        greeting = "Good Morning";
        break;
    case "French":
        greeting="Bonjour!";
        break;
    case "japanese":
        greeting="Ohayo Gozaimasu!";
        break;
    default:
        greeting="Selamat Pagi";

}
console.log(greeting)

/*Output :
Bonjour!
*/