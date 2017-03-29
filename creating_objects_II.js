function VehicleConstructor(name,wheels,passengers,speed){
    var vehicle = {};
    var distance_travelled = 0;

    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;
    vehicle.speed = speed;

    vehicle.makeNoise = function() {
        console.log("vroom vroom!")
    }

    vehicle.move = function() {
        updateDistanceTravelled();
        vehicle.makeNoise();
    }

    vehicle.checkMiles = function(){
        console.log("Miles: " + distance_travelled + " miles");
    }

    var updateDistanceTravelled = function(){
        distance_travelled += vehicle.speed;
    }

    return vehicle;
}

var sedan = VehicleConstructor("sedan",4,2,50);

sedan.move();
sedan.move();
sedan.checkMiles();
