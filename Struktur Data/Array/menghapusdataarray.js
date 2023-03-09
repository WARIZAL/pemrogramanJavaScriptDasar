const myArray=["Vanila", 21, 35.4, true, "Progmraming"];

// delete myArray[1]; // menghapus data pada index yang di tentukan lalu membiarkan posis tersebut kosong
/*Output : ["Vanila", 21, < 1 empty item>, true, "Progmraming"] */
myArray.splice(2,1);
/* Output : ["Vanila", 21, true, "Progmraming"] */
console.log(myArray);