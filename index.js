// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function (driver) { 
    return driver.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(drivers, name){
  let length = name.length;
  return drivers.filter(function (driver) { 
    return driver.slice(0, length) === name; });
}
<<<<<<< HEAD

=======
>>>>>>> 41b1c39bc77fbb8d1b583ef5b338f3c205e9ed55
function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}