"use strict"

var runningLogger = () => {console.log("I am running!");}
runningLogger();

var multiplyByTen = (num) => {
    if (typeof(num) === 'number'){
        return num*10
    }
}
multiplyByTen(5);
