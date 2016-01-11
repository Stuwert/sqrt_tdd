function ghostBusters(building){
  var ghosts = false;
  var returnString = "";
  building = building.trim();
  for (var i=0; i<building.length; i++){
    if(building[i]=== " "){
      ghosts = true;
    }else{
      returnString += building[i];
    }
  }

  if (ghosts){
    return returnString, "Nope, there may still be a ghost in the building.  Try again."
  }else{
    return "You just wanted my autograph didn't you?"
  }
}

console.log(ghostBusters("Factor y"));
