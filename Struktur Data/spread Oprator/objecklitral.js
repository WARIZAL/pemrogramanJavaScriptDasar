

const obj1 = { firstName:'warizal', age:21};
const obj2 = { lastName:'ilwi', gender:'M'};

const newObj = {...obj1, ...obj2};

console.log(newObj);
/*Output :
{firstName:'warizal', age:21 lastName:'ilwi', gender:'M' }

*/
