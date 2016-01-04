var object = require('./weekday_info.json')

function planetCorrespondence(day){
  day = day.toLowerCase();
  day = day.charAt(0).toUpperCase() + day.slice(1);
  return (day in object) ? object[day].planet : "Please input a day";
}

console.log(planetCorrespondence("DAY"))
console.log(planetCorrespondence("monday"))
console.log(planetCorrespondence("tuESDAY"))
console.log(planetCorrespondence("WEDNESDAY"))
