// function secondsToHours(seconds){
//     var minutes=seconds/60;
//     var hours=minutes/60;
//     return hours;
// }
// var result=secondsToHours(7200);
// console.log(result);
function secondsToday(seconds){
    var minutes=seconds/60;
    var hours=minutes/60;
    var days=hours/24;
    return days;
}
var result=secondsToday(7200000);
console.log(result);