function fib() {
 var prev = 0;
 var curr = 1;
 function nacci() {
   console.log(curr);
   var temp = prev;
   prev = curr;
   curr = curr + temp;
 }
 return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
