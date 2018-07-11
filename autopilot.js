
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

function driveCar(carObj, cityDistance) {
  if (carObj.gas < cityDistance) {
    fillUpGas(carObj);
    return console.log('Needed Gas!');
  }
    carObj.city = getDestination(carObj);
    carObj.gas -= cityDistance;
    console.log("Drove to " + carObj.city + "   Remaining gas: " + carObj.gas);
    return carObj.city;
};

function dropOffPassengers(carObj) {
  var oldNum = carObj.passenger;
  carObj.passenger -= 0;
  console.log('Dropped off ' + oldNum + " passengers");
  return oldNum;
};

function carAct(carObj) {
  var distanceBetweenCities = 50;

  if (carObj.gas < 20) {
    fillUpGas(carObj);
  } else if (carObj.passenger < 3) {
    addPassengers(4, carObj);
  } else {
    if (carObj.gas < distanceBetweenCities) {
      fillUpGas(carObj);
    }
  };
  droveTo = driveCar(carObj, distanceBetweenCities);
  passengers_dropped = dropOffPassengers(carObj);
  return 'Drove to ' + droveTo + " dropped off " + passengers_dropped + " people.";
};

function commandFleet(carArray) {
  for (var i = 0; i < carArray.length; i++ ) {
    var action = carAct(carArray[i]);
    console.log('Car' + (i + 1) + ": " + action);
  };
};

function addOneCarPerDay(cars, numDays) {
  for ( var i = numDays; i > 0; i-- ) {
    var newCar = getNewCar('London', 0);
    addCar(newCar);
    commandFleet(cars);
  }
};
