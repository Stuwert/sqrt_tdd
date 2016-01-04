var object = require('./weekday_info.json')

Object.prototype.planetCorrespondence = function(day){
  day = day.toLowerCase();
  day = day.charAt(0).toUpperCase() + day.slice(1);
  return (day in this) ? this[day].planet : "Please input a day";
}

console.log(object.planetCorrespondence("DAY"))
console.log(object.planetCorrespondence("monday"))
console.log(object.planetCorrespondence("tuESDAY"))
console.log(object.planetCorrespondence("WEDNESDAY"))
