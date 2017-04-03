function PersonConstructor(name){
    var person = {};

    person.name = name;
    var distance_travelled = 0;

    person.sayName = function(){
        console.log("My name is " + this.name);
    }

    person.saySomething = function(str) {
        console.log(person.name + " says '" + str + "'");
    }

    person.walk = function() {
        console.log(person.name + " is walking...");
        distance_travelled += 3;
    }
    return person
}

//NinjaConstructor
function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if (ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    else{
        console.log("You have grown beyond the dojo.");
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltLevel];
  return ninja;
}

var me = PersonConstructor("Priscilla");
me.sayName();
me.saySomething("I am hungry");
