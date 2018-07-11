
function getNewCar(city, passengers) {
  var newCar = {
    'city': city,
    'passengers': passengers,
    'gas': 100,
  }
  return newCar
};

var carArray = [];
function addCar(car) {
  carArray.push(car);
  console.log("Adding new car to fleet. Fleet size is now" +carArray.length ".");
};

function addPassengers(passNum, carObj) {
  carObj.passenger = passNum;
  carObj.gas -= 10;
};
