function isLeepYear(year){
const remainder = year % 4;
if (remainder ==0){
  return true;
}else{
   return false
}
}
const leep =isLeepYear(2020);
console.log(leep);
