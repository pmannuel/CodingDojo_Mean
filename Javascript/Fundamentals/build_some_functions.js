function runningLogger() {
    console.log("I am running!");
}

function multiplyByTen(num) {
    if (typeof(num) === 'number'){
        return num*10
    }
}
multiplyByTen(5);

function stringReturnOne(){
    return "Hello there."
}

function stringReturnTwo(){
    return "Hello. Nice to meet you."
}

function caller(param){
    if(typeof(param) === 'function'){
        param();
    }
    else {
        return
    }
}
caller(stringReturnOne);

function myDoubleConsoleLog(param1,param2){
  if (typeof(param1) == 'function' && typeof(param2) == 'function'){
    console.log(param1(), param2());
  }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

// more interesting, we hope!
function caller2(param){
  console.log('starting');
  var x = setTimeout(function(){
    if (typeof(param)=='function'){
      param(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log('ending');
  return "interesting";
}

caller2(myDoubleConsoleLog);
