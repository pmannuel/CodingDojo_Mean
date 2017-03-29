function VehicleConstructor(name,wheels,passengers){
    var vehicle = {};

    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;

    vehicle.makeNoise = function() {
        console.log("vroom vroom!")
    }

    return vehicle;
}

var bike = VehicleConstructor("bike",2,2);

bike.makeNoise = function(){
    console.log("ring ring!");
}

bike.makeNoise();

var sedan = VehicleConstructor("sedan",2,2);

sedan.makeNoise = function(){
    console.log("honk honk!");
}

sedan.makeNoise();

var bus = VehicleConstructor("bus",4,1);

bus.takePassenger = function(){
    bus.passengers++;
    console.log("Number of passengers: " + bus.passengers);
}

bus.takePassenger();
bus.takePassenger();
