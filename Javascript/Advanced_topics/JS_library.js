var _ = {
    map: function(list, callback) {
       if(typeof(list) === 'object'){
           for(var i=0; i<list.length; i++){
               list[i] = callback(list[i]);
           }
       }
       return list;
   },
   reduce: function(list, callback, memo) {
      if(!memo){
          memo = list[0];
      }
       if(typeof(list) === 'object'){
           var new_array = [];
           for(var i=1; i<list.length; i++){
               memo = callback(memo, list[i])
               }
           }
       return memo;
   },
   find: function() {
       for (var i = 0; i < array.length; i++) {
        if (callback(array[i])){
          return array[i];
        }
      }
   },
   filter: function(list, callback) {
       if(typeof(list) === 'object'){
           var new_array = [];
           for(var i=0; i<list.length; i++){
               console.log(callback(list[i]));
               if(!callback(list[i])){
                   list.splice(i,1);
               }
           }
       }
       return list;
   },
   reject: function() {
       var tempArray =[];
      for (var i = 0; i < array.length; i++) {
        if (!callback(array[i])){
          tempArray.push(array[i]);
        }
      }
      // we could also modify the original array
      return tempArray;
   }
 }

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; });
console.log(sum); // if things are working right, this will return 6.
