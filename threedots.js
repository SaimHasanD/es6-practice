const ages = [15,16,17,11];
const ages2 = [10,18,14,17];
const ages3 = [20,26,27,31];
const allAges = ages.concat(ages2).concat(100).concat(ages3);
const allAges2 = [...ages, ...ages2,100, ...ages3]  //way to es6 add array
const takaPoisa = [12,5,6,95,24,12];
const maximum = Math.max(...takaPoisa);
console.log(maximum);
console.log(allAges2);
