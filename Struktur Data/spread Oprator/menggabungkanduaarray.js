const favorite=["Ayam", "Telur", "Sosis", "mie ayam"];
const other =["cake", "pie", "Donut"];

const allfavorites ={favorite,other};
console.log(allfavorites);
/*Output :
{
    ["Ayam", "Telur", "Sosis", "mie ayam"];
    ["cake", "pie", "Donut"];
}
*/


//menggunakan spread operator
const allfavorites2 =[...favorite, ...other];
console.log(allfavorites2);
/*Output :
[   
    "Ayam", "Telur",
    "Sosis", "mie ayam"
    "cake", "pie", 
    "Donut"  
]
*/