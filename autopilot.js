
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

function getDestination(carObj) {
  if (carObj.city === 'Toronto') {
    var value = 'mississauga';
  } else if (carObj.city === 'mississauga') {
    var value = 'London';
  } else if (carObj.city === 'London') {
    var value = 'Toronto';
  };
  return value
}

function fillUpGas(carObj) {
  prevGas = carObj.gas;
  carObj.gas = 100;
  console.log("Filled up to " + carObj.gas + " gas from " + prevGas);
};

function showGas(carObj) {
  console.log('Gas Level is:' + carObj.gas + " %.");
};
